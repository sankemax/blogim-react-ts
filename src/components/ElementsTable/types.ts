import { Item } from '../Item/ItemType';
import { Feed } from '../Feed/FeedType';
import { Config } from '../../config/ConfigType';

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

export interface CustomPaginationActionsTableProps {
  dataType: Item['type'] | Feed['type']
  config: Config
}
