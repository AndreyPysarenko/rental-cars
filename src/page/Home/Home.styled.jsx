import styled from "styled-components";
import Image from "../../images/bg.jpg";

export const Section = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
`;

export const SectionHome = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: auto;
  max-width: 1440px;
  overflow: hidden;
`;

export const WrapperHome = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin: 0 20px;
  height: 100vh;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: var(--color-text-main);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
