export interface HeaderHeightState {
    height: number
}

export interface HeaderHeightAction {
    type: 'CHANGE'
    height: number
}

export default function headerHeightReducer(state: HeaderHeightState, action: HeaderHeightAction): HeaderHeightState {
    return action.type === 'CHANGE'
        ? { height: action.height }
        : state
}
