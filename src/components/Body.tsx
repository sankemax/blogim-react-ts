import React from "react";

import Table from "./ElementsTable/Table";
import { Config } from "../config/ConfigType";

export default function Body({ config }: { config: Config }) {
    return (
        <div>
            <Table dataType="Item" config={config} />
        </div>
    )
}
