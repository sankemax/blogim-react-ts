import React from "react";
import ElementGrid from "./BasicGrid/ElementGrid";
import { Config } from "../config/ConfigType";
import "./Body.css";

export interface BodyProps {
    config: Config
}

export default function Body({ config,}: BodyProps) {
    return (
        <div>
            <p className="Description">
                פוסטים חדשים מבלוגים ישראלים. האתר מתעדכן אוטומטית באופן שוטף.
            </p>
            <ElementGrid dataType="Item" config={config} />
        </div>
    )
}
