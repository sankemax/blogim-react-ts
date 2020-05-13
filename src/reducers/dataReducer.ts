export interface DataState {
    data?: any[]
    fetching?: boolean
    error?: boolean
}

export interface DataAction {
    type: 'STACK_DATA' | 'FETCHING_DATA' | 'ERROR'
    data?: any[]
    fetching?: boolean
    error?: boolean
}

export default function dataReducer(state: DataState, action: DataAction): DataState {
    switch (action.type) {
        case 'STACK_DATA':
            return { ...state, data: state.data!.concat(action.data) };
        case 'FETCHING_DATA':
            return { ...state, fetching: action.fetching! };
        case 'ERROR':
            return { ...state, error: true };
        default:
            return state;
    }
}
