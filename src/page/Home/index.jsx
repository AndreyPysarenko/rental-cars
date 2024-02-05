import { LinkStyled } from "page/Favorite/Favorite.styled";
import { Section, SectionHome, WrapperHome } from "./Home.styled";

const Home = () => {
  return (
    <Section>
      <SectionHome>
        <WrapperHome>
          <h1>
            Welcome to our website. Here you will find the best choice for car
            rental in the our <LinkStyled to="/catalog">Catalog</LinkStyled>.
          </h1>
        </WrapperHome>
      </SectionHome>
    </Section>
  );
};

export default Home;
