import React from 'react'
import { Link } from 'react-router-dom'
import AuthenticationButton from './authentication/AuthenticationButton'


export default function Navbar() {
  return (
      <div className='fixed bg-black text-white pt-2 pb-2 px-10 w-full navbar flex justify-between'>
        <div className='flex justify-center flex-col'>
          <p className='text-5xl pb-2'><Link to ="/">KeepScore</Link></p>
        </div>
        <div className='flex justify-evenly w-max flex-grow items-center'>
          <p className='text-2xl'><Link to="/matchhistory">Match History</Link></p>
          <p className='text-2xl'><Link to="/creatematch">Create Match</Link></p>
          <p className='text-2xl'><Link to="/teams">Teams</Link></p>
        </div>
        <div className='flex justify-center flex-col items-center'>
        <AuthenticationButton/>
        </div>
      </div>
  )
}
