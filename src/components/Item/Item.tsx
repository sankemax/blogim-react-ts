import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { Item } from './ItemType';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export function ItemComponent({
    id,
    title,
    description,
    link,
    feedUrl,
    pubdate,
    comments,
}: Item) {
    const classes = useStyles();
    return (
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
    )
}
