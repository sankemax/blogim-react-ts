import React from 'react';
import moment from 'moment';
import { FeedType } from './FeedType';
import "./Feed.css";
import { Theme, createStyles } from '@material-ui/core';

moment.locale('he');

declare module '@material-ui/core/styles/withStyles' {
    // Augment the BaseCSSProperties so that we can control jss-rtl
    interface BaseCSSProperties {
      /*
       * Used to control if the rule-set should be affected by rtl transformation
       */
      flip?: boolean;
    }
  }
  
  const styles = (theme: Theme) =>
    createStyles({
      flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
      },
      table: {
        // temporary right-to-left patch, waiting for
        // https://github.com/bvaughn/react-virtualized/issues/454
        '& .ReactVirtualized__Table__headerRow': {
          flip: false,
          paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
        },
      },
      tableRow: {
        cursor: 'pointer',
      },
      tableRowHover: {
        '&:hover': {
          backgroundColor: theme.palette.grey[200],
        },
      },
      tableCell: {
        flex: 1,
      },
      noClick: {
        cursor: 'initial',
      },
    });
  
  interface ColumnData {
    dataKey: string;
    label: string;
    numeric?: boolean;
    width: number;
  }
  
  interface Row {
    index: number;
  }

export function FeedComponent({
    id,
    blogTitle,
    author,
    linkToWebPage,
    lastPostDate,
    numberOfItems,
}: FeedType) {
    const formattedDate = moment(lastPostDate).format('DD/MM');
    return (
        <div key={id}>
            <a className="FeedLink" href={linkToWebPage}>{blogTitle}</a>, {numberOfItems}, {author}, {formattedDate}
        </div>
    );
}
