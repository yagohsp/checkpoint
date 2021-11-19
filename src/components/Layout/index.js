import React, { useState } from "react";

import Menu from "./Menu";
import Friends from "./Friends";
import { Grid, Background, Content } from "./styles";
import { useHistory } from "react-router";

export default function Layout({ children }) {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 997px)").matches
  );

  const history = useHistory();

  return (
    <Background>
      <Grid>
        <Menu />
        {history.location.pathname !== "/mensagens" && (
          <Content>{children}</Content>
        )}
        {(history.location.pathname === "/mensagens" || isDesktop) && (
          <Friends />
        )}
      </Grid>
    </Background>
  );
}
