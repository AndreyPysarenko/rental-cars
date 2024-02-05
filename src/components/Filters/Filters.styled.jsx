import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--color-text-label);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: ${(props) => props.$padding || "14px 14px 14px 70px"};
  margin-top: 8px;
  border-radius: ${(props) => props.$radius || "14px"};
  border: none;
  border-right: ${(props) => props.$border || "none"};
  background-color: var(--color-filter-field);
  color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &:focus {
    outline-color: var(--color-button);
  }
`;

export const FalseInput = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.$left || "24px"};
  bottom: 14px;
  color: var(--color-text-main);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const WrapSecondInput = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${(props) => props.width || "136px"};
  height: 48px;
  padding: 14px;
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

export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    fontSize: "16px",
    lineHeight: "1.25",
    fontWeight: "500",
    color: state.isSelected
      ? "var(--color-text-main)"
      : "rgba(18, 20, 23, 0.20)",
    backgroundColor: "var(--color-text-button-and-bg)",
    cursor: "pointer",
    padding: "0px",
    margin: "0px",

    "&:not(:last-child)": {
      marginBottom: "8px",
    },
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    fontSize: "18px",
    lineHeight: "1.11",
    color: "var(--color-text-main)",
  }),

  menu: (defaultStyles) => ({
    ...defaultStyles,
    width: "224px",
    height: "272px",
    padding: "14px 8px 14px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    background: "var(--color-text-button-and-bg)",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  }),

  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "transparent",
  }),

  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    paddingRight: "18px",
    color: "var(--color-text-main)",
  }),

  container: (defaultStyles, state) => ({
    ...defaultStyles,
    border: `none`,
    borderRadius: "14px",
    marginTop: "8px",
    outline: "none",
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: "14px 0px 14px 18px",
    margin: "0px",
  }),

  input: (styles) => ({
    ...styles,
    padding: "0px",
    margin: "0px",
  }),

  menuList: (base) => ({
    ...base,
    margin: "0px",
    padding: "0px",
    height: "244px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },
  }),

  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "var(--color-text-main)",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "1.11",
    margin: "0px",
    padding: "0px",
  }),
};

export const firstSelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: "pointer",
    background: "var(--color-filter-field)",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    height: "48px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    width: "224px",
  }),
};

export const secondSelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: "pointer",
    background: "var(--color-filter-field)",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    height: "48px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    width: "125px",
    paddingLeft: "21px",
  }),
};
