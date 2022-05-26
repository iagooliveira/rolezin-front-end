import React from "react";
import FirstSection from "./submodules/HomeSection";
import SecondSection from "./submodules/secondSection/secondSection";
import UltimaSecao from "./submodules/thirdSection/thirdSection";
import MainHeader from "./submodules/MainHeader";
import Footer from "./submodules/footer/footer.jsx";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <FirstSection />
      <SecondSection/>
      <UltimaSecao/>
      <Footer/>
    </>
  );
};

export default MainPage;
