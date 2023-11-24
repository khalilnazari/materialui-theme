import React, { createContext, useContext, ReactNode, useMemo } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

// Define the theme type
type Theme = "light" | "dark";

// Create a context for the theme
interface ThemeContextType {
  mode: Theme;
  toggleTheme: () => void;
}

const themeSettings = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: blue,
            divider: grey[800],
            background: {
              default: "#fff",
              paper: grey[100],
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            primary: grey,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[800],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storage = localStorage.getItem("theme");
  let currentMode;
  if (storage) {
    currentMode = JSON.parse(storage);
  }

  const [mode, setMode] = React.useState<Theme>(
    currentMode ? currentMode : "light"
  );

  localStorage.setItem("theme", JSON.stringify(mode));

  const toggleTheme = () => {
    setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
