import React, { useState } from "react";

import Menu from "./Menu";
import Friends from "./Friends";
import { Grid, Background, Content } from "./styles";

export default function Layout({ children }) {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 997px)").matches
  );

  return (
    <Background>
      <Grid>
        <Menu />
        <Content>{children}</Content>
        {isDesktop && <Friends />}
      </Grid>
    </Background>
  );
}
