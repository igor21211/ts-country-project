import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "./controls-slice";
import { AppDispatch } from "@/store";
import { selectSearch } from "./controlSelectors";
import { ChangeEventHandler } from "react";

type Search = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, Search] => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector(selectSearch);

  const handleSearch: Search = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
