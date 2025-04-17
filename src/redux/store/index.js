import { configureStore, combineReducers } from "@reduxjs/toolkit"
import faveReducer from "../reducers/favourites"
import listReducer from "../reducers/list"

const uniqueReducer = combineReducers({
  favourites: faveReducer,
  jobs: listReducer,
})

const store = configureStore({
  reducer: uniqueReducer,
})

export default store
