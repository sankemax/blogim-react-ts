export interface OffsetState {
    limit: number
    offset: number
}

export interface OffsetAction {
    type: 'SCROLL'
}

export default function offsetReducer(state: OffsetState, action: OffsetAction) {
    const { limit, offset, } = state;
    switch (action.type) {
        case 'SCROLL':
        default:
            return {
                limit,
                offset: offset + limit + 1,
            }
    }
}
