import React from 'react';
import moment from 'moment';
import { makeStyles, createStyles, createMuiTheme, Theme, ThemeProvider, } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Item } from './ItemType';

moment.locale('he');

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '100%',
        },
        content: {

        },
        avatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            backgroundColor: grey[500],
        },

    }),
);

const muiTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Alef',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
        ].join(','),
    },
});

export function ItemComponent({
    id,
    title,
    blogTitle,
    domain,
    description,
    link,
    feedUrl,
    author,
    pubdate,
    categories,
    comments,
}: Item) {
    const classes = useStyles();
    const formattedDate = moment(pubdate).format('LLLL'); //.format('YYYY-MM-DD HH:mm:ssZ');
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar
                        className={classes.avatar}
                        alt={`favicon for ${title} post`}
                        src={`https://www.google.com/s2/favicons?sz=32&domain_url=${domain}`}
                    />
                }
                title={`${blogTitle} - ${author}`}
                subheader={formattedDate}
            />
            <Link href={link}>{title}</Link>
            <CardContent className={classes.content}>
                <ThemeProvider theme={muiTheme}>
                    <Typography variant="body1" color="primary" component="p">
                        {description}
                    </Typography>
                    <Typography paragraph>{categories?.map(category => `#${category}`)?.join(", ") ?? ""}</Typography>
                </ThemeProvider>
            </CardContent>
        </Card>
    )
}
