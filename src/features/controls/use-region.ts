import { useSelector, useDispatch } from "react-redux";

import { setRegion } from "./controls-slice";
import { selectRegion } from "./controlSelectors";
import { AppDispatch } from "@/store";
import { CountryOption } from "./CustomSelect";
import { Region } from "@/types";
import { SingleValue } from "react-select";

type onSelect = (reg: SingleValue<CountryOption>) => void;
export const useRegion = (): [Region | "", onSelect] => {
  const dispatch = useDispatch<AppDispatch>();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value as Region));
    } else {
      dispatch(setRegion(""));
    }
  };

  return [region, handleSelect];
};
