import { FETCH_JOBS, FETCH_JOBS_ERROR } from "../actions"

const initialState = {
  jobs: [],
  isError: false,
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        available: action.payload,
      }

    case FETCH_JOBS_ERROR:
      return {
        ...state,
        isError: true,
      }

    default:
      return state
  }
}

export default listReducer
