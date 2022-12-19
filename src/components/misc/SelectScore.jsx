import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SetScore({ onChanged}) {
  const [num, setNum] = React.useState(0);
  return (
    <Box component="form">
      <TextField
        type="number"
        id="score-basic"
        label="Score"
        variant="outlined"
        InputProps={{
          inputProps: { min: 0 }
        }}
        onChange={(e) => {
          onChanged(e.target.value)
          return setNum(e.target.value);
        }}
        value={num === 0 ? "" : num}
        sx={{ width: 100 }}
      />
    </Box>
  );
}