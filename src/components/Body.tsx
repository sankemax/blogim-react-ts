import React from "react";

import ElementGrid from "./BasicGrid/ElementGrid";
import { Config } from "../config/ConfigType";

export default function Body({ config }: { config: Config }) {
    return (
            <ElementGrid dataType="Item" config={config} />
    )
}
