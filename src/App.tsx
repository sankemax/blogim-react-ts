import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Config } from "./config/ConfigType";
import { Container } from "@material-ui/core";
import "./App.css";

function App({ config }: { config: Config }) {
  return (
    <Container maxWidth="lg">
      <Header />
      <Body config={config} />
      <Footer />
    </Container>
  );
}

export default App;
