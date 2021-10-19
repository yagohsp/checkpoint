import React, { useState } from "react";

import Menu from "./Menu";
import Friends from "./Friends";
import { Grid, Background } from "./styles";

export default function Layout({ children }) {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 997px)").matches)

  return (
    <Background>
      <Grid>
        <Menu />
        {children}
        {isDesktop && <Friends />}
      </Grid>
    </Background>
  );
}
