import React from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
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
    return (
        <Grid container spacing={spacing}>
            {children?.map((feed: any) => (<FeedComponent key={feed.id} {...{ ...feed, spacing, classes, }} />) ?? null)}
        </Grid>
    );
}