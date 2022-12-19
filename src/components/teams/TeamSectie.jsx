import React from 'react';

export default function TeamSectie({team, onDelete}){
  return(
    <section className='w-3/4 bg-gray-100 py-5 border-black border my-3 shadow-lg'>
      <div className='bg-gray-100 pl-10 flex flex-col items-left navbar'>
        <p className='text-1xl text-left'>{team === null ? "Invalid name" : team}</p>
      </div>
    </section>
    )
}