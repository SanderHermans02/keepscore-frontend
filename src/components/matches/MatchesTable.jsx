import React from 'react'
import Match from './Match'
import { useState, useCallback } from 'react'

import useMatches from '../../api/matches'

export default function MatchesTable({matches}) {
  const matchApi = useMatches();
  const [, setError] = useState(null);
  const handleDelete = useCallback(async (idToDelete) => {
    try {
      setError(null);
      await matchApi.deleteById(idToDelete);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, [matchApi]);

  function getMatches() {
    if(matches.length === 0) {
      return <p>No matches found</p>
    }else{
      return matches.map((match) => (
         <Match key={match.id} match={match} deleteClick={handleDelete} />
      ))
    }
  }

  return (
    <>
      {getMatches()}
    </>
  )
}
