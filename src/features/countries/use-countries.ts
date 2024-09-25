import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countriesSelectors";
import { AppDispatch, RootState } from "@/store";
import { loadCountries } from "./countries-slice";
import { Country } from "@/types";
import { selectControls } from "../controls/controlSelectors";

export const useCountries = (): [
  Country[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useDispatch<AppDispatch>();
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
