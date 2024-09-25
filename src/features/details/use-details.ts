import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { clearDetails, loadCountryByName } from "./details-slice";
import { AppDispatch } from "@/store";
import { selectDetails } from "./detailsSelectors";
export const useDetails = (name: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
