import React from "react";
import Button from "@mui/material/Button";


const ButtonSend = (props) => {
    return (
        <Button
        type="submit"
        value="Send"
        disabled={props.isDisabled}
        variant="contained"
        sx={{ mt: 2, mb: 1, bgcolor: "#1d2748" }}
      >
        Send
      </Button>
    )
}

export default ButtonSend
