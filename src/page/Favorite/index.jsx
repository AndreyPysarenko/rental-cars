import { CarItem } from "components/CarItem";
import {
  CarsListStyle,
  Container,
  NotFound,
} from "components/CarsList/CarsList.styled";
import { Section } from "page/Home/Home.styled";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "store/selector";
import { LinkStyled } from "./Favorite.styled";

const Favorite = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <Section>
      <Container>
        {favoriteCars?.length > 0 ? (
          <CarsListStyle>
            {favoriteCars?.map((car, index) => (
              <CarItem car={car} key={index} />
            ))}
          </CarsListStyle>
        ) : (
          <NotFound>
            <p>
              Please select your favorite cars in the our{" "}
              <LinkStyled to="/catalog">Catalog</LinkStyled>.
            </p>
          </NotFound>
        )}
      </Container>
    </Section>
  );
};

export default Favorite;
