import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import LoginReducer from './LoginReducers';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'LoginReducer',
    storage,
    whiteList:['LoginReducer']
};

const rootReducer = combineReducers({
    LoginReducer : LoginReducer 
});

export default persistReducer(persistConfig, rootReducer);


