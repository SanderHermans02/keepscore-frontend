import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useTeams from '../../api/teams'


export default function SelectTeam({onChanged}) {
  const teamsApi = useTeams();
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const getValues = async () =>  {
    let teams = await teamsApi.getAll()
    return teams
  }    


  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const values = await getValues();
      values.map((team) => {
        return team.label = team.name
      })
      if (active) {

        setOptions([...values]);
      }
    })();
    return () => {
      active = false;
    };
  }, [getValues, loading]);

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
          onChanged(newValue)
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="addteam"
        options={options}
        loading={loading}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Team" />}
      />
    </div>
  );
}