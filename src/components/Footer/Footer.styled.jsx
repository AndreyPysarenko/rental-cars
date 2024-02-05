import styled from "styled-components";

export const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  width: 100%;
  padding: 50px 0px;
  margin: 0;
  font-size: 18px;
  color: var(--color-text-button-and-bg);
  background-color: var(--color-button);
`;

export const SocialIcon = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const SocialIconItem = styled.li`
  width: 40px;
  height: 40px;
  border: none;
`;

export const SocialIconLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;

  &:hover,
  &:focus {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const SocialIconSvg = styled.svg`
  fill: var(--color-text-button-and-bg);
  width: ${(props) => props.size || "35px"};
  height: ${(props) => props.size || "35px"};
`;
