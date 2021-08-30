import React from 'react';
import { Filled } from '../';
import { Grid, Background, SideMenu, SearchBar } from './styles';

export default function Layout({ children }) {
  return (
    <Background>
      <Grid>
        <SideMenu>
          <Filled removeSide="right">
            <SearchBar placeholder="Buscar"/>
          </Filled>
        </SideMenu>
        {children}
      </Grid>
    </Background>
  )
}
