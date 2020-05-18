export interface DataState<T> {
    data?: T[]
    fetching?: boolean
    error?: boolean
}

export interface DataAction<T> {
    type: 'STACK_DATA' | 'FETCHING_DATA' | 'ERROR'
    data?: T[]
    fetching?: boolean
    error?: boolean
}

export default function dataReducer<T>(state: DataState<T>, action: DataAction<T>): DataState<T> {
    switch (action.type) {
        case 'STACK_DATA':
            return { ...state, data: state.data!.concat(action.data ?? []) };
        case 'FETCHING_DATA':
            return { ...state, fetching: action.fetching! };
        case 'ERROR':
            return { ...state, error: true };
        default:
            return state;
    }
}
