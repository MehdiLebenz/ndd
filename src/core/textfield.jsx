import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import { string } from "yup";


function TexfieldInput  ()  {
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(false);

    const handleChange = e => {
        const value = e.currentTarget.value;
        setEmail(value);
        setValid(
          string()
            .email()
            .isValidSync(value)
        );
      };
    
    return (
        <div style={{ 
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
        }}>
    <TextField
    margin="normal"
    onChange={handleChange}
    value={email}
    required
    id="email"
    label="Email"
    name="email"
    autoComplete="email"
    autoFocus
    sx={{
      mt: 7,
      mb: 3,
      width: 300,
    }}
  />
  <span style={{ color: "red"}}>{valid ? "" : "Please provide a valid email"}</span>
  </div>
  )
}

export default TexfieldInput;