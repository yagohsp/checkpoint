import React from "react";

import SideMenu from "./SideMenu";
import Friends from "./Friends";
import {
  Grid,
  Background,
} from "./styles";

export default function Layout({ children }) {
  return (
    <Background>
      <Grid>
        <SideMenu />
        {children}
        <Friends />
      </Grid>
    </Background>
  );
}
