import AviasalesService from '../../../services/aviasalesService'

export const fetchTicketsRequest = () => ({
  type: 'FETCH_TICKETS_REQUEST',
})

export const fetchTicketsSuccess = (tickets) => ({
  type: 'FETCH_TICKETS_SUCCESS',
  payload: tickets,
})

export const fetchTicketsFailure = (error) => ({
  type: 'FETCH_TICKETS_FAILURE',
  payload: error,
})

export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch(fetchTicketsRequest())

    const service = new AviasalesService()

    try {
      await service.getSearchId()

      const tickets = []

      const fetchTicketsOnce = async () => {
        try {
          const response = await service.getTickets(service.id)
          tickets.push(...response.tickets)

          if (!response.stop) {
            fetchTicketsOnce()
          } else {
            dispatch(fetchTicketsSuccess(tickets))
          }
        } catch (error) {
          if (error.message.includes('500')) {
            fetchTicketsOnce()
          } else {
            dispatch(fetchTicketsFailure(error.message))
          }
        }
      }

      fetchTicketsOnce()
    } catch (error) {
      dispatch(fetchTicketsFailure(error.message))
    }
  }
}
