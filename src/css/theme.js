import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      background: "#bbbb",
    },
    text: {
      primary: "#1d2748",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default theme;