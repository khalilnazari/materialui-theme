import { createTheme } from "@mui/material";
import { useMemo, useState } from "react";

const themeSettings = (mode: any) => {
  return {
    palette: {
      mode: mode,
    },
  };
};

export const useMode = () => {
  const storage = localStorage.getItem("theme");
  let currentMode;
  if (storage) {
    currentMode = JSON.parse(storage);
  }

  const [mode, setMode] = useState<string>(currentMode);
  localStorage.setItem("theme", JSON.stringify(mode));

  const toggleDarkMode = useMemo(
    () => () => {
      setMode((prev) => (prev === "dark" ? "light" : "dark"));
    },
    [mode]
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, toggleDarkMode };
};
