import React, { useRef } from "react";
import ButtonSend from "../core/button";
import CssBaseline from "@mui/material/CssBaseline";
import TexfieldInput from "../core/textfield";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import Retail from "../image/Retail.png";
import theme from "../css/theme.js";

export default function BoxInput() {
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
          md={7}
          sx={{
            backgroundImage: `url(${Retail})`,
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
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <form ref={form} onSubmit={sendEmail}>
            <Box
              ref={form}
              onSubmit={sendEmail}
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
                sx={{ textAlign: "center" }}
              >
                This domain is for sale if you are interested <br />
                enter your email
              </Typography>
              <TexfieldInput />
              <ButtonSend />
            </Box>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
