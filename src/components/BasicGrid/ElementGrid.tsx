import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { GridType } from './types';
import { useGetData } from "../../hooks/getData";
import { ItemComponent } from "../Item/Item";
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

export default function CenteredGrid({ dataType, config }: GridType) {
  const classes = useStyles();

  const { data, error, loading, } = useGetData(dataType, 10, 0, config)//() => { });

  if (error) {
    return (<div>ERROR...</div>);
  }

  if (loading) {
    return (<div>LOADING...</div>)
  }

  return (
    <div className={classes.root}>
      {
        data == null || !data.length ? null : data.map(
          (element: any) => <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ItemComponent {...element} />
            </Paper>
          </Grid>
        )
      }
    </div>
  );
}
