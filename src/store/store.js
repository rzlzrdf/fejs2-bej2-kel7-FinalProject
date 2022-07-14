import {combineReducers, createStore} from 'redux'
import semuaReducer from './produk/reducer'

const reducers = combineReducers({
    semua: semuaReducer
})

const store = createStore(reducers)

export default store