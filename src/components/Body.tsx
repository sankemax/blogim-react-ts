import React from "react";

import ElementGrid from "./BasicGrid/ElementGrid";
import { Config } from "../config/ConfigType";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { HeaderHeightState } from "../reducers/headerHeightReducer";

const useStyles = (marginTop: number) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: `${marginTop}px`,
        }
    }),
);

export interface BodyProps {
    config: Config
    headerHeightState: HeaderHeightState
}

export default function Body({ config, headerHeightState }: BodyProps) {
    const classes = useStyles(headerHeightState.height)();
    return (
        <div className={classes.root}>
            <ElementGrid dataType="Item" config={config} />
        </div>
    )
}
