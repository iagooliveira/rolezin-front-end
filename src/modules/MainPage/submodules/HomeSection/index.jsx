import { MainH1, Section } from "./style";
import Logo from "./party_photo.jpg";

const HomeSection = () => {
  return (
    <Section>
      <MainH1>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries
      </MainH1>
      <img src={{ Logo }} />
    </Section>
  );
};

export default HomeSection;
