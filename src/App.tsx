import { Box, Button } from "@mui/material";
import "./App.css";

import TypographyComponent from "./components/Typography";
import { useTheme } from "./context/themeContext";

function App() {
  const { toggleTheme } = useTheme();

  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ padding: 10 }}
    >
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
      <TypographyComponent />
    </Box>
  );
}

export default App;
