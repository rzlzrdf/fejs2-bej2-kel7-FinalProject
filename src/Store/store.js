import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './Cart'
import userSlice from './userSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlice.reducer,
    }
})

export default store