import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { useCallback } from 'react';

export default function TeamSectie({team, deleteClick}){
  let id = team.id ? team.id : 0;
  const deleteTeam = useCallback((event) => {
    event.preventDefault();
    deleteClick(id);
    window.location.reload();
  }, [id, deleteClick]);

  return(
    <section className='w-3/4 bg-slate-200 py-5 border-black border my-3 shadow-lg'>
        <div className='bg-slate-200 pl-10 items-left navbar'>
          <p className='text-1xl text-left flex justify-between items-center'>{team.name === null ? "Invalid name" : team.name}
          <IconButton aria-label="delete" color="error" onClick={deleteTeam}>
            <DeleteIcon />
          </IconButton> </p>
      </div>
    </section>
    )
}