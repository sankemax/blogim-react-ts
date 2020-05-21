import React, { useReducer } from "react";
import ElementGrid from "../BasicGrid/ElementGrid";
import { Config } from "../../config/ConfigType";
import AppTabs from '../Tabs/AppTabs';
import tabsSelectionReducer from '../../reducers/tabsReducer';
import "./Body.css";
import About from "../About/About";

export interface BodyProps {
    config: Config
}

export default function Body({ config, }: BodyProps) {
    const [tabState, dispatchTabState] = useReducer(tabsSelectionReducer, { tabSelected: 0 });

    return (
        <>
            <p className="Description" onClick={() => window.location.href = '/'}>
                פוסטים חדשים מבלוגים ישראלים. האתר מתעדכן אוטומטית באופן שוטף.
            </p>
            <AppTabs tabState={tabState} dispatcher={dispatchTabState} />

            <ElementGrid
                hidden={tabState.tabSelected !== 0}
                dataType="Item"
                config={config}
                paginationSize={5}
            />

            <ElementGrid
                hidden={tabState.tabSelected !== 1}
                dataType="Feed"
                config={config}
                paginationSize={20}
            />

            <About hidden={tabState.tabSelected !== 2} />
        </>
    )
}
