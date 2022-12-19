import { useState, useMemo, useCallback, useEffect, useContext } from 'react';
import AddNewTeam from './AddNewTeam'
import TeamsTable from './TeamsTable';

import * as teamsApi from  '../../api/teams';
import Error from '../Error';
export default function TeamList() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try{
        const data = await teamsApi.getAll();
        console.log(data);
        setTeams(data);
      } catch (error){
        console.log(error);
        setError(error);
      }
    };

    fetchTransactions();
  }, [])

  const clearText = () => {
    document.getElementById("teamtf").value = "";
    setTeamName('');
  }

  const onClick = useCallback(async () => {
    console.log("Adding team: " + teamName)
    try {
      if(!teamName) return;
      if(teams.find(team => team.name === teamName)) {
        alert("Team already exists");	
        return;
      };
      const data = await teamsApi.save({ name: teamName});
      let newTeams = [...teams, data];
      newTeams.sort((a, b) => (a.name > b.name) ? 1 : -1);
      setTeams(newTeams);
      console.log(newTeams);

      clearText();
    } catch (error) {
      setError(error);
    }
  }, [teamName, teams]);
  
  const onChange = (async (event) => {
    setTeamName(event.target.value);
  });

  return (
    <>
      <div className='bg-white w-9/12 py-2 pt-12 mt-12 flex flex-col justify-left items-center navbar'>
        <div className='w-3/4 bg-white-100 py-2'>
          <h1 className='text-2xl pb-2'>Add Team</h1>  
          <AddNewTeam onClick={onClick} onChange={onChange}  />
          <h1 className='text-2xl pt-2'>Teams overview</h1>
        </div>
        <Error error={error}/>
        {!error && <TeamsTable key={2} teams={teams}/>}
      </div>  
    </>
  )
}