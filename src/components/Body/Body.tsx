import React, { useReducer, Reducer } from "react";
import ElementGrid from "../BasicGrid/ElementGrid";
import { Config } from "../../config/ConfigType";
import AppTabs from '../Tabs/AppTabs';
import tabsSelectionReducer from '../../reducers/tabsReducer';
import "./Body.css";
import offsetReducer from "../../reducers/offsetReducer";
import dataReducer, { DataState, DataAction } from "../../reducers/dataReducer";
import { Item } from "../Item/ItemType";
import { Feed } from "../Feed/FeedType";
import About from "../About/About";

export interface BodyProps {
    config: Config
}

export default function Body({ config, }: BodyProps) {
    const [tabState, dispatchTabState] = useReducer(tabsSelectionReducer, { tabSelected: 0 });

    // Items
    const [itemPagination, itemPaginationDispatch] = useReducer(offsetReducer, { limit: 5, offset: 0 });
    const [itemData, itemDataDispatch] = useReducer<Reducer<DataState<Item>, DataAction<Item>>>(
        dataReducer,
        { data: [], fetching: true, error: false, }
    );

    // Feeds
    const [feedPagination, feedPaginationDispatch] = useReducer(offsetReducer, { limit: 20, offset: 0 });
    const [feedData, feedDataDispatch] = useReducer<Reducer<DataState<Feed>, DataAction<Feed>>>(
        dataReducer,
        { data: [], fetching: true, error: false, }
    );

    return (
        <>
            <p className="Description">
                פוסטים חדשים מבלוגים ישראלים. האתר מתעדכן אוטומטית באופן שוטף.
            </p>
            <AppTabs tabState={tabState} dispatcher={dispatchTabState} />

            <ElementGrid
                hidden={tabState.tabSelected !== 0}
                dataType="Item"
                config={config}
                dataState={itemData}
                dataDispatcher={itemDataDispatch}
                paginationState={itemPagination}
                paginationDispatcher={itemPaginationDispatch}
            />

            <ElementGrid
                hidden={tabState.tabSelected !== 1}
                dataType="Feed"
                config={config}
                dataState={feedData}
                dataDispatcher={feedDataDispatch}
                paginationState={feedPagination}
                paginationDispatcher={feedPaginationDispatch}
            />

            <About hidden={tabState.tabSelected !== 2} />
        </>
    )
}
