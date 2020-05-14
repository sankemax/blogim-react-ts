import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { Config } from "./config/ConfigType";
import { Container } from "@material-ui/core";

function App({ config }: { config: Config }) {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Body config={config} />
      </Container>
    </div>
  );
}

export default App;
