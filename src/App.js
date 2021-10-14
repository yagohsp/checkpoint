import React from "react";

import { GlobalStyles } from "./components";
import { AuthProvider } from "./providers/Auth";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}

export default App;
