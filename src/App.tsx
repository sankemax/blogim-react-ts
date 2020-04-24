import React from "react";
import Body from "./components/ElementsTable/Body";
import "./App.css";
import { Config } from "./config/ConfigType";

function App({ config }: { config: Config }) {
  return (
    // <Header />
    <Body dataType="Item" config={config} />
    // <Footer />
  );
}

export default App;
