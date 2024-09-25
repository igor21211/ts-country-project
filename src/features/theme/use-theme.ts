import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { setTheme, Theme } from "./theme-slice";
import { AppDispatch } from "@/store";
import { selectTheme } from "./themeSelectors";

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector(selectTheme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
