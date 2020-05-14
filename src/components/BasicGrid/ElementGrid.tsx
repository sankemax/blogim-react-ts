import React, { useReducer, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { GridType } from './ElementGridType';
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { ItemComponent } from "../Item/Item";
import fetchData from '../../hooks/fetchData';
import offsetReducer from '../../reducers/offsetReducer';
import dataReducer from '../../reducers/dataReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { Config } from '../../config/ConfigType';
// import { FeedComponent } from "../Feed";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
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
    <span className="GridRoot">
      <div>
        {
          !(blogData?.data?.length ?? 0)
            ? null
            : blogData?.data?.map(
              (element: any, idx: number) =>
                <Grid className="ElementGrid" item key={idx} xs={12}>
                  <Paper className={classes.paper}>
                    {dataType === 'Item' ? <ItemComponent {...element} /> : null}
                  </Paper>
                </Grid>
            )
        }
      </div>

      {blogData.fetching && (<div className={classes.loader}>
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
