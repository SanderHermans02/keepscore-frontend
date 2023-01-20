import React from 'react'
import TeamSectie from './TeamSectie'
import { useState, useCallback } from 'react'
import useTeams from '../../api/teams'


export default function TeamsTable({teams}) {
  const teamsApi = useTeams();
  let [, setError] = useState(null);
  const deleteTeam = useCallback(async (idToDelete) => {
    try {
      setError(null);
      await teamsApi.deleteById(idToDelete);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, [teamsApi]);

  function getTeams(){
      if (teams.length === 0) {
        return <p>No teams found</p>
      }else{
        return teams.map((team) => (
          <TeamSectie key={team.id} team={team} deleteClick={deleteTeam}/>
      ))
    }
  }
  return (
    <>
    {getTeams()}
    </>
  )
}

