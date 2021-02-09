import * as actions from '../actions/sideActions';

var initialState = {
    sidebar:null,topbar:null
};

export function sidereducer(state = initialState, action) {
    switch (action.type) {
        case actions.SETUP_NEW_SIDEPANEL: {
            return { ...state, sidebar: action.data };
        }
        case actions.SETUP_TOPBAR: {
            return { ...state, topbar: action.data };
        }
        default: return state;
    }
}
