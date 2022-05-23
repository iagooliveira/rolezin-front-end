import NavBarButton from "../../../../../../Components/NavBarButton/index";
import HeaderLogo from "../Logo";
import { Header, Wrapper } from "./style";

const NavBar = () => {
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
      </Wrapper>
    </Header>
  );
};

export default NavBar;
