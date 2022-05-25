import React from "react";
import FirstSection from "./submodules/HomeSection";
import SecondSection from "./submodules/secondSection/secondSection";
import MainHeader from "./submodules/MainHeader";
import Footer from "./submodules/footer/footer.jsx";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <FirstSection />
      <SecondSection/>
      <Footer/>
    </>
  );
};

export default MainPage;
