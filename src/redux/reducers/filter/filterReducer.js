/* eslint-disable no-case-declarations */
/* eslint-disable prettier/prettier */
const initialState = {
  all: false,
  without: false,
  oneStep: false,
  twoStep: false,
  threeStep: false,
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'TOGGLE_ALL':
    return {
      ...state,
      all: !state.all,
      without: !state.all,
      oneStep: !state.all,
      twoStep: !state.all,
      threeStep: !state.all
    }
  case 'TOGGLE_CHECKBOX':
    const updatedState = {
      ...state,
      [action.payload]: !state[action.payload],
    }
    if(
      updatedState.without &&
      updatedState.oneStep &&
      updatedState.twoStep &&
      updatedState.threeStep 
    ) {
      updatedState.all = true
    } else {
      updatedState.all = false
    }
    return updatedState

  default:
    return state
  }
}

export default filterReducer
