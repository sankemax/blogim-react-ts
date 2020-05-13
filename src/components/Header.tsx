import React, { useEffect, Dispatch, useRef } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Theme, createStyles, makeStyles } from "@material-ui/core";
import { HeaderHeightAction } from "../reducers/headerHeightReducer";
// import { Config } from "../config/ConfigType";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            flexGrow: 1,
            position: "fixed",
            top: 0,
            backgroundColor: grey[50],
        },
        menuButton: {
            marginLeft: theme.spacing(2),
        },
        title: {
            textAlign: "center",
            color: blue[500],
            flexGrow: 1,
        },
    }),
);

export interface HeaderProps {
    heightChange: Dispatch<HeaderHeightAction>
}

export default function Header({ heightChange }: HeaderProps) {
    const classes = useStyles();
    const appBarRef = useRef<HTMLElement | null>(null);

    useEffect(
        () => {
            heightChange({ type: 'CHANGE', height: appBarRef?.current?.offsetHeight ?? 1000 })
        },
        [heightChange]
    );
    console.log('rerender')
    return (
        <AppBar ref={appBarRef} className={classes.appBar} >
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <img src="http://info.org.il/club/blogim-logo-small.png" alt="glasses illustration" />
                <Typography variant="h6" className={classes.title}>
                    כתיבה עצמאית מעניינת בעברית
                </Typography>
            </Toolbar>
        </AppBar>
    )
}