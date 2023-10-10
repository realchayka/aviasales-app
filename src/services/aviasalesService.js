/* eslint-disable no-useless-catch */
import axios from 'axios'

export default class AviasalesService {
  constructor() {
    this.url = 'https://aviasales-test-api.kata.academy'
    this.id = null
  }

  async getTickets(searchId) {
    try {
      const response = await axios.get(`${this.url}/tickets?searchId=${searchId}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  async getSearchId() {
    try {
      const response = await axios.get(`${this.url}/search`)
      this.id = response.data.searchId
    } catch (error) {
      throw error
    }
  }
}
