import { Box } from "@mui/material";
import "./App.css";

import TypographyComponent from "./components/Typography";

function App() {
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ padding: 10 }}
    >
      <TypographyComponent />
    </Box>
  );
}

export default App;
