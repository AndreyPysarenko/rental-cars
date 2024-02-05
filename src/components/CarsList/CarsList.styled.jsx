import styled from "styled-components";

export const CarsListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 50px;
`;

export const LoadMore = styled.p`
  display: ${(props) => props.display || "block"};
  color: var(--color-text-loadmore);
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-text-loadmore-hover);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 108px;
  margin: 40px 20px 50px;
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  font-weight: 600;
  font-size: 40px;
  color: var(--color-text-main);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
