import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Config } from "./config/ConfigType";
import "./App.css";

function App({ config }: { config: Config }) {
  return (<div>
    <Header />
    <Body config={config} />
    <Footer />
  </div>
  );
}

export default App;
