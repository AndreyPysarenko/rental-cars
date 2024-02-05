import { CarsList } from "components/CarsList";
import { Filters } from "components/Filters";
import { Container } from "./Catalog.styled";

const Catalog = () => {
  return (
    <>
      <Container>
        <Filters />
      </Container>
      <CarsList />
    </>
  );
};

export default Catalog;
