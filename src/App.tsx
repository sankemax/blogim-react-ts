import React from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { Config } from "./config/ConfigType";
import { Container } from "@material-ui/core";

function App({ config }: { config: Config }) {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Body config={config} />
      </Container>
    </>
  );
}

export default App;
