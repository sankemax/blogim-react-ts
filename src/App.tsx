import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { Config } from "./config/ConfigType";
import { Container } from "@material-ui/core";
import "./App.css";

function App({ config }: { config: Config }) {

  return (
    <div>
      <Header />
      <Container className="Head" maxWidth="lg">
        <Body config={config} />
      </Container>
    </div>
  );
}

export default App;
