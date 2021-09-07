import React from "react";
import { IoSearch, IoHome, IoNotifications, IoCloudy, IoPerson } from "react-icons/io5";
import { BiTrendingUp } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"

import { Filled } from "../../";
import {
  Menu,
  SearchBar,
  LinkIcon,
  SearchIcon,
  MenuList,
  Link,
  MoreButton
} from "./styles";
import { Profile } from "./styles";

export default function SideMenu() {
  return (
    <Menu>
      <Filled removeSide="right">
        <SearchBar placeholder="Buscar" />
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
      </Filled>

      <MenuList>
        <li>
          <Link to="/" exact={true}>Página Inicial</Link>
          <LinkIcon>
            <IoHome />
          </LinkIcon>
        </li>
        <li>
          <Link to="/notificacoes">Notificações</Link>
          <LinkIcon>
            <IoNotifications />
          </LinkIcon>
        </li>
        <li>
          <Link to="/salvos">Salvos</Link>
          <LinkIcon>
            <IoCloudy />
          </LinkIcon>
        </li>
        <li>
          <Link to="/destaques">Destaques</Link>
          <LinkIcon>
            <BiTrendingUp />
          </LinkIcon>
        </li>
        <li>
          <Link to="/perfil">Perfil</Link>
          <LinkIcon>
            <IoPerson />
          </LinkIcon>
        </li>
      </MenuList>

      <Filled removeSide="right">
        <Profile>
          <img src="https://pbs.twimg.com/media/Eyua9A-WEAIsVNR?format=jpg&name=medium" alt="eu" />
          <span>Yshen</span>
          <MoreButton>
            <BsThreeDots />
          </MoreButton>
        </Profile>
      </Filled>
    </Menu>
  );
}
