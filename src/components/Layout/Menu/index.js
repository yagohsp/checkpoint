import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import {
  IoSearch,
  IoHome,
  IoNotifications,
  IoCloudy,
  IoPerson,
} from "react-icons/io5";
import { IoMdClose, IoMdExit } from "react-icons/io";
import { HiOutlineMail, HiOutlineMenu } from "react-icons/hi";
import { BiTrendingUp } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import ScrollLock from "react-scrolllock";

import { Filled } from "../..";
import { logout } from "../../../services/user/authentication";
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
  MobileFooter,
  LogoutButton,
  MoreOptions,
} from "./styles";
import { AuthContext } from "../../../providers/Auth";
import ProfilePhoto from "../../ProfilePhoto";

export default function Menu() {
  const { currentUserData } = useContext(AuthContext);
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <ScrollLock isActive={showMenu} />
      <MenuWrapper showMenu={showMenu}>
        <SearchBar onClick={() => history.push("buscar")} isVisible={history.location.pathname === "/buscar"}>
          <Filled
            removeSide="right"
            borderColor={history.location.pathname === "/buscar" && "#bc54e0"}
          >
            <input placeholder="Buscar" />
            <SearchIcon>
              <IoSearch />
            </SearchIcon>
          </Filled>
        </SearchBar>

        <MenuList slideToTop={history.location.pathname === "/buscar"}>
          <li>
            <Link to="/" exact={true}>
              Página Inicial
              <LinkIcon>
                <IoHome />
              </LinkIcon>
            </Link>
          </li>
          <li>
            <Link to="/notificacoes">
              Notificações
              <LinkIcon>
                <IoNotifications />
              </LinkIcon>
            </Link>
          </li>
          <li>
            <Link to="/meu-perfil">
              Meu perfil
              <LinkIcon>
                <IoPerson />
              </LinkIcon>
            </Link>
          </li>
          <li>
            <Link to="/salvos">
              Salvos
              <LinkIcon>
                <IoCloudy />
              </LinkIcon>
            </Link>
          </li>
          <li>
            <Link to="/destaques">
              Destaques
              <LinkIcon>
                <BiTrendingUp />
              </LinkIcon>
            </Link>
          </li>
          <li>
            <Link to="/buscar">
              Pesquisar
              <LinkIcon>
                <GoSearch />
              </LinkIcon>
            </Link>
          </li>
          <li>
            <LogoutButton>
              Sair
              <LinkIcon>
                <IoMdExit />
              </LinkIcon>
            </LogoutButton>
          </li>
        </MenuList>

        <Profile>
          <ProfilePhoto />
          <span>{currentUserData?.Nome}</span>
          <MoreButton onClick={() => setShowMenu((state) => !state)}>
            <BsThreeDots />
          </MoreButton>
          {showMenu && (
            <>
              <MoreOptions>
                <button onClick={logout}>Sair</button>
                <span onClick={() => setShowMenu(false)} />
              </MoreOptions>
            </>
          )}
        </Profile>

        <CloseMenu onClick={() => setShowMenu(false)}>
          <IoMdClose />
        </CloseMenu>
      </MenuWrapper>

      <MobileHeader>
        <button onClick={() => setShowMenu(true)}>
          <HiOutlineMenu color="#fff" />
        </button>
      </MobileHeader>

      <MobileFooter>
        <Link to="/" exact>
          <IoHome />
        </Link>
        <Link to="/notificacoes">
          <IoNotifications />
        </Link>
        <Link to="/buscar">
          <GoSearch />
        </Link>
        <Link to="/mensagens">
          <HiOutlineMail />
        </Link>
      </MobileFooter>
    </>
  );
}
