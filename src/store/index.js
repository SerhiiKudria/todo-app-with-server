import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './slices/taskSlice'

const store = configureStore({ reducer: contactsReducer })

export default store
