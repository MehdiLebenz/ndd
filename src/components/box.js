import React, { useRef, useState } from "react";
import ButtonSend from "../core/button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import cover from "../image/cover.png";
import theme from "../css/theme.js";
import TextField from "@mui/material/TextField";
import { string } from "yup";


export default function BoxInput() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const handleChangeEmail = e => {
    const Emailvalue = e.currentTarget.value;
    setEmail(Emailvalue);
    setValid(
      string()
        .email()
        .isValidSync(Emailvalue)
    );
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_TOKEN
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "90vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            backgroundPosition: "center",
          }}
        />
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
        >
          <form ref={form} onSubmit={sendEmail}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                sx={{ textAlign: "center" , color: "#1d2748"}}
              >
                This domain name is now available for sale. <br/>
                Enter your email below to purchase this valuable domain name.<br/>
                you will be contacted shortly by the owner              
                </Typography>
                <TextField
    margin="normal"
    required
    value={email}
    id="email"
    label="Email"
    name="email"
    onChange={handleChangeEmail}
    autoComplete="email"
    autoFocus
    sx={{
      mt: 7,
      mb: 3,
      width: 300,
    }}
  />
    <span style={{ color: "red"}}>{valid ? "" : "Please provide a valid email"}</span>

             <TextField
    margin="normal"
    required
    name = "domain"
    id="Domain"
    label="Domain"
    autoComplete="domain"
    autoFocus
    sx={{
      mt: 3,
      mb: 3,
      width: 300,
    }}
  />
   
              <ButtonSend />
            </Box>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
