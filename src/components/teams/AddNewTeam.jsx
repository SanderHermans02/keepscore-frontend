import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddNewTeam({onClick, onChange, teamName}){
  const [value, setValue] = useState("");
  
  function onClickLocal() {
    onClick();
    setValue("");
  }
  const onChangeLocal = (event) => {
    onChange(event);
    setValue(event.target.value);
    teamName = event.target.value;
  }

  return(
    <>
    <div>
      <TextField
        label="Team Name"
        id="teamtf"
        size="small"
        onChange={onChangeLocal}
        value={value}
      />
      <Button size="medium" variant="outlined" sx={{height: 40}} onClick={onClickLocal}>Add Team</Button>
    </div>
    </>
  )
}