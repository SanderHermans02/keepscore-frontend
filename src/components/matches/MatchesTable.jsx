import React from 'react'
import Match from './Match'
import { useState, useCallback } from 'react'


import * as matchApi from '../../api/matches'

export default function MatchesTable({matches}) {
  const [, setError] = useState(null);
  const handleDelete = useCallback(async (idToDelete) => {
    try {
      setError(null);
      await matchApi.deleteById(idToDelete);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, []);

  function editMatch(id) {
    console.log(id)
  }

  function getMatches() {
    
    if(matches.length === 0) {
      return <p>Could not find any matches</p>
    }else{
      return matches.map((match) => (
         <Match key={match.id} match={match} deleteClick={handleDelete} editClick={editMatch} />
      ))
    }
  }

  return (
    <>
      {getMatches()}
    </>
  )
}
