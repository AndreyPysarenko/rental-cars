import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  color: var(--color-text-loadmore);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    color: var(--color-button-hover);
  }
`;
