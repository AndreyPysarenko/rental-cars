import { HeaderStyled, Link, Nav } from "./Header.styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorite</Link>
        </Nav>
      </HeaderStyled>
    </>
  );
};

export default Header;
