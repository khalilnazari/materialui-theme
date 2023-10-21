import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isCodeValide, setIsCodeValie] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

  const validateEmail = () => {
    if (email) {
      setIsEmailValid(true);
    }
  };

  const verifyConfirmationCode = () => {
    if (confirmationCode) {
      setIsCodeValie(true);
    }
  };

  const submitPassword = () => {
    if (password && passwordConfirm) {
      if (password === passwordConfirm) {
        setPasswordResetSuccess(true);
      }
    }
  };

  const emailComponent = (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <TextField
          label="Email address"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          sx={{ width: "100%" }}
        />
      </Box>

      <Box sx={{ marginBottom: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%", padding: "15px 0" }}
          onClick={validateEmail}
        >
          Verify email
        </Button>
      </Box>
    </>
  );

  const codeComponent = (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <TextField
          label="Code"
          variant="outlined"
          sx={{ width: "100%" }}
          type="text"
          onChange={(e) => setConfirmationCode(e.target.value)}
          value={confirmationCode}
        />
      </Box>

      <Box sx={{ marginBottom: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%", padding: "15px 0" }}
          onClick={verifyConfirmationCode}
        >
          Check Code
        </Button>
      </Box>
    </>
  );

  const passwordComponent = (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <TextField
          label="New Passwrod"
          variant="outlined"
          sx={{ width: "100%" }}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Box>

      <Box sx={{ marginBottom: "30px" }}>
        <TextField
          label="Confirm New Passwrod"
          variant="outlined"
          sx={{ width: "100%" }}
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%", padding: "15px 0" }}
          onClick={submitPassword}
        >
          Reset Password
        </Button>
      </Box>
    </>
  );

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
        {!isEmailValid ? (
          emailComponent
        ) : isEmailValid && !isCodeValide ? (
          codeComponent
        ) : !passwordResetSuccess ? (
          passwordComponent
        ) : (
          <Box>Password reset success. Login</Box>
        )}

        <Box>
          <Link to={`/login`}>
            <Button
              variant="text"
              color="primary"
              sx={{ width: "100%", padding: "15px 0" }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
