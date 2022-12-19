import React from 'react'
import { useState } from 'react'
import MatchesTable from './MatchesTable'
import * as matchApi from '../../api/matches'
import * as teamsApi from  '../../api/teams';
import Error from '../Error'

export default function MatchHistory() {
  const [matches, setMatches] = useState([])
  const [error, setError] = useState(null)

  React.useEffect(() => {
    const getData = async () => {
    

      try{
        const data = await matchApi.getAll()
        const teams = await teamsApi.getAll()

        let newMatches = []
        data.forEach(match => {
          let newMatch = match
          newMatch.homeTeamName = teams.find(team => team.id === newMatch.homeTeamId).name
          newMatch.awayTeamName = teams.find(team => team.id === newMatch.awayTeamId).name
          newMatches.push(newMatch)
        });

        setMatches(newMatches)
      }catch (error){
        console.log(error)
        setError(error)
      }

      
    };
    getData()
  }, [])

  return (
    <>
      <div className='bg-white pt-12 mt-12 flex justify-center navbar'>
        <h1 className='text-5xl mb-4'>Match History</h1>
      </div>
      <div className='bg-white w-9/12 -py-2 flex justify-center flex-col items-center navbar'>
        <MatchesTable matches={matches}/>
        {error && <Error error={error} />}
    </div>
    </>
  )
}
