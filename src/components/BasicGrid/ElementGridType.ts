import { Config } from "../../config/ConfigType";
import { Dispatch } from "react";
import { DataAction, DataState } from "../../reducers/dataReducer";
import { OffsetAction, OffsetState } from "../../reducers/offsetReducer";

export interface GridType<T> {
    config: Config
    hidden: boolean
    dataType: 'Item' | 'Feed'
    dataState: DataState<T>
    dataDispatcher: Dispatch<DataAction<T>>
    paginationState: OffsetState
    paginationDispatcher: Dispatch<OffsetAction>
}
