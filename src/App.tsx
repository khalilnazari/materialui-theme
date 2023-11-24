import { Box, Toolbar } from "@mui/material";
import "./App.css";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <TopHeader />
      <Toolbar />

      <Box sx={{ display: "flex", gap: "20px" }}>
        <Sidebar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
