import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "100px",
      }}
    >
      <Box
        component="form"
        sx={{
          padding: "50px",
          width: "500px",
          border: "1px solid #f0f0f0",
          borderRadius: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ marginBottom: "30px" }}>
          <TextField
            label="Email address"
            variant="outlined"
            sx={{ width: "100%" }}
            type="email"
          />
        </Box>

        <Box sx={{ marginBottom: "30px" }}>
          <TextField
            label="Passwrod"
            variant="outlined"
            sx={{ width: "100%" }}
            type="password"
          />
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", padding: "15px 0" }}
          >
            Login
          </Button>
        </Box>

        <Box>
          <Link to={`/forget-password`}>
            <Button
              variant="text"
              color="primary"
              sx={{ width: "100%", padding: "15px 0" }}
            >
              Forget Password
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
