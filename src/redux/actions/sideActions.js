export const SETUP_NEW_SIDEPANEL = 'SETUP_NEW_SIDEPANEL';
export const SETUP_TOPBAR = 'SETUP_TOPBAR';

export function setupsidepanel(data) {
    return {
        type: SETUP_NEW_SIDEPANEL, data
    }
}

export function setuptopbar(data) {
    return {
        type: SETUP_TOPBAR, data
    }
}