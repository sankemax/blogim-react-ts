import React from "react";
import ElementGrid from "./BasicGrid/ElementGrid";
import { Config } from "../config/ConfigType";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import "./Body.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);

export interface BodyProps {
    config: Config
}

export default function Body({ config,}: BodyProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p className="Description">
                פוסטים חדשים מבלוגים ישראלים. האתר מתעדכן אוטומטית באופן שוטף.
            </p>
            <ElementGrid dataType="Item" config={config} />
        </div>
    )
}
