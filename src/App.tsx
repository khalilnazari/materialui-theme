import { Box, Toolbar } from "@mui/material";
import "./App.css";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <TopHeader />
      <Toolbar />

      <Box sx={{ display: "flex", gap: "20px" }}>
        <Sidebar />
        <Box sx={{ backgroundColor: "white", flexGrow: "1" }}>main content</Box>
      </Box>
    </Box>
  );
}

export default App;
