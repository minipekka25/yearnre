import { combineReducers } from 'redux';
import { web3Reducer } from './web3Reducer';
import {sidereducer} from './sideReducer'

const rootReducer = combineReducers({
    side:sidereducer,
    web3:web3Reducer 
});

export default rootReducer;
