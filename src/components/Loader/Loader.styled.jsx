import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
  z-index: 999;
`;
