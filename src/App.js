import React from "react";
import { BrowserRouter } from "react-router-dom";
import Introduction from "./components/Intoduction";

const App = () => {
  return (
    <BrowserRouter>
      <Introduction />
    </BrowserRouter>
  );
};

export default App;