import * as actions from '../actions/web3Actions';

var initialState = {
    web3:null,account:null,contract:null
};

export function web3Reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SETUP_WEB3: {
            return { ...state, web3: action.data.web3, account:action.data.account, contract:action.data.contract };
        }
        default: return state;
    }
}
