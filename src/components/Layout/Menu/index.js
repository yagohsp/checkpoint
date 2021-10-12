import React, { useState } from "react";
import {
  IoSearch,
  IoHome,
  IoNotifications,
  IoCloudy,
  IoPerson,
} from "react-icons/io5";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { BiTrendingUp } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

import { Filled } from "../..";
import {
  MenuWrapper,
  SearchBar,
  LinkIcon,
  SearchIcon,
  MenuList,
  Link,
  MoreButton,
  Profile,
  CloseMenu,
  MobileHeader,
} from "./styles";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuWrapper showMenu={showMenu}>
        <SearchBar>
          <Filled removeSide="right">
            <input placeholder="Buscar" />
            <SearchIcon>
              <IoSearch />
            </SearchIcon>
          </Filled>
        </SearchBar>

        <MenuList>
          <li>
            <Link to="/" exact={true}>
              Página Inicial
            </Link>
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

        <Profile>
          <img
            src="https://pbs.twimg.com/media/Eyua9A-WEAIsVNR?format=jpg&name=medium"
            alt="eu"
          />
          <span>Yshen</span>
          <MoreButton>
            <BsThreeDots />
          </MoreButton>
        </Profile>

        <CloseMenu onClick={() => setShowMenu(false)}>
          <IoMdClose />
        </CloseMenu>
      </MenuWrapper>

      <MobileHeader>
        <button onClick={() => setShowMenu(true)}>
          <IoMdMenu />
        </button>
      </MobileHeader>
    </>
  );
}