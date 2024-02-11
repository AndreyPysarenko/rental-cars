import styled from 'styled-components';

export const CarItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
  flex-basis: calc((100% - 3 * 29px) / 4);
  width: 274px;
  height: 426px;
`;

export const CarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  width: 100%;
  height: 354px;
`;

export const ImgWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center center;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Heart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  fill: ${props => props.fill || 'none'};
  stroke: ${props => props.stroke || 'var(--color-text-button-and-bg)'};
  cursor: pointer;

  &:hover,
  &:focus {
    fill: var(--color-button);
    stroke: none;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`;

export const TitleH3 = styled.h3`
  font-size: inherit;
  font-weight: inherit;
`;

export const Span = styled.span`
  color: var(--color-text-loadmore);
`;

export const DescriptListWrap = styled.div`
  display: flex;
  gap: ${props => props.$gap || '4px'};
  flex-direction: column;
  height: auto;
`;

export const DescriptList = styled.ul`
  display: inline-flex;
  gap: 6px;
  height: auto;
  color: var(--color-text-second);
`;

export const DescriptItem = styled.li`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      display: block;
      height: auto;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-right: 6px;
      content: '';
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: ${props => props.width || '100%'};
  height: 44px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: var(--color-button);
  color: var(--color-text-button-and-bg);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: var(--color-button-hover);
  }
`;
