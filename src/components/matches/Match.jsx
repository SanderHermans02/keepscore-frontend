import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useCallback } from 'react'

export default function Match({match , deleteClick, editClick}) {
    let id = match.id ? match.id : 0
    let homeTeam = match.homeTeamName ? match.homeTeamName : 'Home Team'
    let awayTeam = match.awayTeamName  ? match.awayTeamName : 'Away Team'
    let homeScore = match.homeScore  ? match.homeScore : 0
    let awayScore = match.awayScore  ? match.awayScore : 0
    let Datum = match.date ? match.date.split('T')[0] : 'Datum'
    const handleDelete = useCallback((event) => {
        event.preventDefault();
        deleteClick(id);
      }, [id, deleteClick]);


    return (
        <section className='w-3/4 bg-gray-100 py-5 border-black border my-3 shadow-xl'>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-col items-center justify-center w-1/3'>
                    <p className='text-3xl break-all text-center pl-4'>{homeTeam}</p>
                </div>
                <div className='w-1/3'>
                    <p className='text-center mb-5 text-2xl'>{Datum}</p>
                    <p className='text-center mb-5 text-5xl'>{homeScore}-{awayScore}</p>
                    <div className='flex justify-center'>
                        <IconButton aria-label="edit" onClick={editClick(id)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-1/3'>
                    <p className='text-3xl break-all text-center'>{awayTeam}</p>
                </div>
            </div>
        </section>
    )
}
