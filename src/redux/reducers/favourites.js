import { ADD_TO_FAVES, REMOVE_FROM_FAVES } from "../actions"

const initialState = {
  content: [],
}
const faveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVES:
      return {
        ...state.favourites,
        content: state.favourites.content.concat(action.payload),
      }

    case REMOVE_FROM_FAVES:
      return {
        ...state,
        content: state.favourites.content.filter((book, i) => {
          if (i !== action.payload) {
            return true
          } else {
            return false
          }
        }),
      }
    default:
      return state
  }
}

export default faveReducer
