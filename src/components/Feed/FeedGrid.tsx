import React from 'react';
import Grid, { GridSpacing, GridSize } from '@material-ui/core/Grid';
import { FeedComponent } from './Feed';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            display: 'flex',
            marginBottom: '5px',
        },
        title: {
            marginBottom: '10px',
        },
    }),
);

export default function FeedGrid({ children }: any) {
    const classes: Record<"grid" | "title", string> = useStyles();
    const spacing: GridSpacing = 1;
    const mainXs: GridSize = 5;
    const secondaryXs: GridSize = 2;
    return (
        <Grid container spacing={spacing}>
            <Grid className={classes.title} item xs={mainXs}><b>Title</b></Grid>
            <Grid className={classes.title} item xs={mainXs - 2 as GridSize}><b>Author</b></Grid>
            <Grid className={classes.title} item xs={secondaryXs}><b>Stories</b></Grid>
            <Grid className={classes.title} item xs={secondaryXs}><b>When</b></Grid>
            {children?.map((feed: any) => (<FeedComponent key={feed.id} {...{ ...feed, spacing, mainXs, secondaryXs, classes, }} />) ?? null)}
        </Grid>
    );
}