import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='bg-white text-lg pt-12 mt-12 flex justify-evenly flex-col items-center navbar'>
        <p className='text-5xl mt-12 pt-12'>Welcome to KeepScore!</p>
        <p className='pt-4'>KeepScore is a website created by Sander Hermans.</p>
        <p>Here you can save and keep track of the results of sport matches.</p>
        <p>You can <Link className='text-blue-500' to={"/teams"}>create teams</Link> and add them to a <Link className='text-blue-500' to={"/creatematch"}>match</Link>.</p>
        <p>The matches you created can be viewed in your <Link className='text-blue-500' to={"/matchhistory"}>match history</Link>.</p>
        <p>Thank you for using KeepScore!</p>
        <p></p>
      </div>
      
    </>
  )
}