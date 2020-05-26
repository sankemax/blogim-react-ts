import { Config } from "../../config/ConfigType";

export interface GridType {
    config: Config
    hidden: boolean
    dataType: 'Item' | 'Update' | 'Feed'
    fetchSize: number
    isPaginated: boolean
}
