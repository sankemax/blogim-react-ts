import { Config } from "../../config/ConfigType";
import { OffsetState } from "../../reducers/offsetReducer";

export interface GridType<T> {
    config: Config
    hidden: boolean
    dataType: 'Item' | 'Feed'
    paginationSize: number
}
