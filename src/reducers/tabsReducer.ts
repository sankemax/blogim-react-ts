export interface TabState {
    tabSelected: number
}

export interface TabAction {
    type: 'SWITCH_TAB'
    moveTo: number
}

export default function tabsSelectionReducer(_: TabState, action: TabAction): TabState {
    switch (action.type) {
        case 'SWITCH_TAB':
            return { tabSelected: action.moveTo };
        default:
            return { tabSelected: 0 };
    }
}
