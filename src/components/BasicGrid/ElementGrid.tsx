import React, { useReducer, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { GridType } from './types';
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { ItemComponent } from "../Item/Item";
import { Item } from '../Item/ItemType';
import { Feed } from '../Feed/FeedType';
import fetchData from '../../hooks/fetchData';
// import { Config } from '../../config/ConfigType';
// import { FeedComponent } from "../Feed";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const dataReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'STACK_DATA':
      return { ...state, data: state.data.concat(action.data) };
    case 'FETCHING_DATA':
      return { ...state, fetching: action.fetching };
    case 'ERROR':
      return { ...state, error: true };
    default:
      return state;
  }
}

function offsetReducer(state: any, action: any) {
  const { limit, offset, } = state;
  switch (action.type) {
    case 'SCROLL':
    default:
      return {
        limit,
        offset: offset + limit + 1,
      }
    //   case 'INIT':
    //   default:
    //     return {
    //       limit,
    //       offset: 0,
    //     }
    // }
  }
}

export default function CenteredGrid({ dataType, config }: GridType) {
  const classes = useStyles();
  const useFetchData = fetchData(dataType, config);

  const [pagination, paginationDispatch] = useReducer(offsetReducer, { limit: 5, offset: 0 });
  const [blogData, dataDispatch] = useReducer(dataReducer, { data: [], fetching: true, error: false, });

  const bottomBoundaryRef = useRef(null);

  useFetchData(pagination, dataDispatch);
  useInfiniteScroll(bottomBoundaryRef, paginationDispatch);

  if (blogData.error) {
    return (<div>ERROR...</div>);
  }

  return (
    <span>
      <div className={classes.root}>
        {
          blogData.data == null || !blogData.data.length
            ? null
            : blogData.data.map(
              (element: any, idx: number) => <Grid
                item key={idx} xs={12}>
                <Paper className={classes.paper}>
                  <ItemComponent {...element} />
                </Paper>
              </Grid>
            )
        }
      </div>

      {blogData.fetching && ( //TODO: material ui loader
        <div className="text-center bg-secondary m-auto p-3">
          <p className="m-0 text-white">Getting Blogs</p>
        </div>
      )}

      <div ref={bottomBoundaryRef} id="page-bottom-boundary" style={{ border: '1px solid red' }}>
      </div>
    </span>
  );
}
