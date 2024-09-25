import { useDispatch } from "react-redux";
import { clearControls } from "./controls-slice";
import { AppDispatch } from "@/store";

export const useCleanup = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cleanUp = () => dispatch(clearControls());

  return () => dispatch(cleanUp());
};
