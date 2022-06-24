import { useState } from "react";
import NavBarButton from "../../../../../../Components/NavBarButton/index";
import LoginButton from "../Login";
import LoginModal from "../LoginModal";
import HeaderLogo from "../Logo";
import { Header, Wrapper } from "./style";

const NavBar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const handleOpen = () => setLoginModal(true);
  const setClose = () => setLoginModal(false);
  return (
    <Header>
      <HeaderLogo
        styles={{
          height: "20px",
          marginLeft: "26px",
          float: "left",
          position: "relative",
          top: "6px",
        }}
      />
      <Wrapper>
        <NavBarButton text="Home" />
        <NavBarButton text="Sobre Nós" />
        <NavBarButton text="Parceiros" />
        <LoginButton
          onClick={handleOpen}
          variant="text"
          sx={{ color: "#333333" }}
        >
          Cadastro
        </LoginButton>
      </Wrapper>

      {loginModal && <LoginModal modal={loginModal} handleClose={setClose} />}
    </Header>
  );
};

export default NavBar;
