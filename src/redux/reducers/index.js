const initialState = {
  favourites: {
    content: [],
  },
}
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.concat(action.payload),
        },
      }

    case "REMOVE_FROM_FAVES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((book, i) => {
            if (i !== action.payload) {
              return true
            } else {
              return false
            }
          }),
        },
      }
    default:
      return state
  }
}

export default mainReducer
