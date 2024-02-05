import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Input,
  InputWrap,
  Label,
  FalseInput,
  WrapSecondInput,
  firstSelectStyles,
  secondSelectStyles,
} from "./Filters.styled";
import Select from "react-select";
import { makeComaInMileage } from "service/serviceFunc";
import { Report } from "notiflix/build/notiflix-report-aio";
import { selectCarBrands } from "store/selector";
import { filterSet } from "store/slice/filterSlice";

export const options = {
  svgSize: "42px",
  position: "center-center",
  timeout: 5000,
};

export const Filters = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectCarBrands);

  const [brand, setBrand] = useState({ value: "all", label: "Enter the text" });
  const [toPrice, setToPrice] = useState({ value: "all", label: "" });
  const [mileageTo, setMileageTo] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageToWithComa, setMileageToWithComa] = useState("");
  const [mileageFromWithComa, setMileageFromWithComa] = useState("");

  const pricesArray = [{ value: "all", label: "All price" }];
  for (let index = 10; index < 501; index += 10) {
    pricesArray.push({ value: index, label: index });
  }

  const onClickSearch = () => {
    if (
      (mileageFrom.length > 0 && mileageTo.length === 0) ||
      (mileageFrom.length === 0 && mileageTo.length > 0)
    ) {
      Report.failure(
        "Failure",
        "Please fill in both search fields by car mileage",
        "Okay",
        options
      );
      return;
    }

    if (
      mileageFrom !== "" &&
      mileageTo !== "" &&
      parseInt(mileageFrom) >= parseInt(mileageTo)
    ) {
      Report.failure(
        "Failure",
        'Mileage "From" must be less than mileage "To"',
        "Okay",
        options
      );
      return;
    }

    const commonFilter = {
      brand: brand.value,
      priceTo: toPrice.value,
      mileage: {
        from: mileageFrom,
        to: mileageTo,
      },
    };
    dispatch(filterSet(commonFilter));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const valueWithComa = makeComaInMileage(value);

    switch (e.target.name) {
      case "mileageFrom":
        setMileageFrom(value);
        setMileageFromWithComa(valueWithComa);
        break;
      case "mileageTo":
        setMileageTo(value);
        setMileageToWithComa(valueWithComa);
        break;
      default:
        break;
    }
  };

  const onClickResetAll = () => {
    setBrand({ value: "all", label: "Enter the text" });
    setToPrice({ value: "all", label: "" });
    setMileageTo("");
    setMileageFrom("");
    setMileageToWithComa("");
    setMileageFromWithComa("");
  };

  return (
    <Form>
      <Label>
        Car brand
        <Select
          id="nameSelect"
          onChange={setBrand}
          options={carBrands}
          isSearchable
          placeholder="Enter the text"
          styles={firstSelectStyles}
          value={brand}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          id="priceSelect"
          onChange={setToPrice}
          options={pricesArray}
          isSearchable
          placeholder=""
          styles={secondSelectStyles}
          value={toPrice}
        />
        <FalseInput $left="18px">To</FalseInput>
        <FalseInput $left="75px">$</FalseInput>
      </Label>
      <InputWrap>
        <Label>
          Car mileage / km
          <Input
            type="text"
            name="mileageFrom"
            value={mileageFrom}
            onChange={handleChange}
            $radius="14px 0px 0px 14px"
            $border="1px solid rgba(138, 138, 137, 0.20)"
          />
          <FalseInput>From {mileageFromWithComa}</FalseInput>
        </Label>
        <WrapSecondInput>
          <Input
            type="text"
            name="mileageTo"
            value={mileageTo}
            onChange={handleChange}
            $radius="0px 14px 14px 0px"
            $padding="14px 14px 14px 48px"
          />
          <FalseInput>To {mileageToWithComa}</FalseInput>
        </WrapSecondInput>
      </InputWrap>
      {(brand.value !== "all" ||
        toPrice.value !== "all" ||
        mileageFrom !== "" ||
        mileageTo !== "") && (
        <Button type="button" onClick={onClickResetAll}>
          Reset params
        </Button>
      )}
      <Button type="button" onClick={onClickSearch}>
        Search
      </Button>
    </Form>
  );
};
