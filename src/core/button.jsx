import React from "react";
import Button from "@mui/material/Button";


const ButtonSend = () => {
    return (
        <Button
        type="submit"
        value="Send"
        variant="contained"
        sx={{ mt: 2, mb: 1, bgcolor: "text.primary" }}
      >
        Send
      </Button>
    )
}

export default ButtonSend