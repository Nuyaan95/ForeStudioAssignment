import React from "react";
import AppLayout from "./layout/AppLayout";

import Routes from "./Routes";

import "./styles.css";

export const App = () => {
  return (
    <>
      <AppLayout>
        <Routes />
      </AppLayout>
    </>
  );
};

export default App;
