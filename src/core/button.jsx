import React from "react";
import Button from "@mui/material/Button";


const ButtonSend = () => {
    return (
        <Button
        type="submit"
        value="Send"
        variant="contained"
        sx={{ mt: 2, mb: 1, bgcolor: "#1d2748" }}
      >
        Send
      </Button>
    )
}

export default ButtonSend