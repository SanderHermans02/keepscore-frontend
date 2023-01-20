import * as React from 'react';
import SelectTeam from '../misc/SelectTeam'
import SelectDate from '../misc/DatePicker'
import SetScore from '../misc/SelectScore'
import Button from '@mui/material/Button';


import useMatches from '../../api/matches'

import Error from '../Error'

export default function CreateMatch() {
  const matchApi = useMatches();
  const [teamidHome, setTeamidHome] = React.useState('')
  const [teamidAway, setTeamidAway] = React.useState('')
  const [date, setDate] = React.useState('')
  const [scoreHome, setScoreHome] = React.useState('')
  const [scoreAway, setScoreAway] = React.useState('')

  const [error, setError] = React.useState(null)


  const Submit = async () =>  {
    console.log('submit')

    console.log(teamidHome.id)
    console.log(teamidAway.id)
    console.log(date)
    console.log(scoreHome)
    console.log(scoreAway)

    let match = {
      homeTeamId: teamidHome.id,
      awayTeamId: teamidAway.id,
      date: date,
      homeScore: scoreHome,
      awayScore: scoreAway
    }
    try{
      await matchApi.save(match)
    }catch (error){
      console.log(error)
      setError(error)
    }
  }

  
  return (
    <>
      <div className='bg-white pt-12 mt-12 flex justify-center navbar'>
        <h1 className='text-5xl mb-4'>Create Match</h1>
      </div>
      <div className='bg-white w-11/12 -py-2 navbar'>
        <div className='flex flex-row justify-evenly border-2 mx-20 border-black'>
          <div className='flex flex-col justify-center items-center'>
            <SelectTeam  onChanged={setTeamidHome}/>
          </div>
          <div className='mt-5 mb-5'>
            <div className='flex flex-col justify-center pt-4 pb-4'>
            <SelectDate onChanged={setDate}/>
            </div>
          <div className='flex flex-row justify-center items-center pt-3'>
            <div className='flex flex-col justify-center items-center mr-5'>
              <SetScore onChanged={setScoreHome}/>
            </div>
            <p className='text-4xl pb-2.5'>-</p>
            <div className='flex flex-col justify-center items-center ml-5'>
              <SetScore onChanged={setScoreAway}/>
            </div>
          </div>
            <div className='flex justify-center mt-5'>
              <Button className='text-white font-bold py-4 px-8 rounded' variant ='contained' onClick={Submit}>Submit</Button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SelectTeam onChanged={setTeamidAway} />
          </div>
        </div>
      </div>
      <div className='bg-white w-full flex justify-center pt-5'>
        {error && <Error error={error} />}
      </div>
    </>
  )
}
