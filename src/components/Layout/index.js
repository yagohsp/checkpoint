import React from "react";

import Menu from "./Menu";
import Friends from "./Friends";
import {
  Grid,
  Background,
} from "./styles";

export default function Layout({ children }) {
  return (
    <Background>
      <Grid>
        <Menu />
        {children}
        <Friends />
      </Grid>
    </Background>
  );
}
