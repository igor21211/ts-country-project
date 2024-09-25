import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadNeighborsByBorder } from "./details-slice";
import { selectNeighbors } from "./detailsSelectors";
import { AppDispatch } from "@/store";

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useDispatch<AppDispatch>();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
