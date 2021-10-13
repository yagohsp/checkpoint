import React from "react";

import { GlobalStyles } from "./components";
import { AuthProvider } from "./providers/Auth";
import { UserDataProvider } from "./providers/UserData";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <UserDataProvider>
        <GlobalStyles />
        <Routes />
      </UserDataProvider>
    </AuthProvider>
  );
}

export default App;
