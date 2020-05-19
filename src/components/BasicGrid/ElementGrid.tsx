import React, { useRef, useReducer, Reducer } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { GridType } from './ElementGridType';
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { ItemComponent } from "../Item/Item";
import fetchData from '../../hooks/fetchData';
import CircularProgress from '@material-ui/core/CircularProgress';
import offsetReducer from '../../reducers/offsetReducer';
import dataReducer, { DataState, DataAction } from '../../reducers/dataReducer';
// import { Feed } from "../Feed";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      overflowWrap: 'break-word',
      backgroundColor: 'whitesmoke',
      marginTop: '10px',
      paddingTop: '16px',
      paddingRight: '5%',
      paddingLeft: '5%',
      color: 'black',
    },
    loader: {
      alignContent: 'center',
      height: '100px',
      width: '100px',
      margin: 'auto',
    },
  }),
);

export default function CenteredGrid<T>({
  dataType,
  config,
  hidden,
  paginationSize,
}: GridType<T>) {
  const classes = useStyles();

  const bottomBoundaryRef = useRef(null);

  const [paginationState, paginationDispatch] = useReducer(offsetReducer, { limit: paginationSize, offset: 0 });
  const [dataState, dataDispatch] = useReducer<Reducer<DataState<T>, DataAction<T>>>(
    dataReducer,
    { data: [], fetching: true, error: false, }
  );

  const useFetchData = fetchData(dataType, config);

  useFetchData(paginationState, dataDispatch);
  useInfiniteScroll(bottomBoundaryRef, paginationDispatch);

  if (dataState.error) {
    return (<div>ERROR...</div>);
  }

  return (
    <span className="GridRoot" hidden={hidden}>
      <div>
        {
          !(dataState?.data?.length ?? 0)
            ? null
            : dataState?.data?.map(
              (element: any) =>
                <Grid className="ElementGrid" item key={element.id} xs={12}>
                  <Paper className={classes.paper}>
                    {dataType === 'Item' ? <ItemComponent {...element} /> : <>FEEDS</>}
                  </Paper>
                </Grid>
            )
        }
      </div>

      {dataState.fetching && (<div className={classes.loader}>
        <CircularProgress
          disableShrink
          size={70}
          variant={'indeterminate'}
        />
      </div>)}

      <div ref={bottomBoundaryRef} id="page-bottom-boundary" style={{ border: '1px' }}>
      </div>
    </span>
  );
}
