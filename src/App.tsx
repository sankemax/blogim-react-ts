import React, { useReducer } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Config } from "./config/ConfigType";
import { Container } from "@material-ui/core";
import "./App.css";
import headerHeightReducer from "./reducers/headerHeightReducer";

function App({ config }: { config: Config }) {
  const [headerHeightState, headerHeightDispatch] = useReducer(headerHeightReducer, { height: 1000 });

  return (
    <Container maxWidth="lg">
      <Header heightChange={headerHeightDispatch} />
      <Body config={config} headerHeightState={headerHeightState} />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
