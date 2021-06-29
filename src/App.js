import React from "react";
import { FaqsContainer } from "./containers/faqs";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
