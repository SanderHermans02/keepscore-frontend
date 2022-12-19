import React from 'react'
import TeamSectie from './TeamSectie'

export default function TeamsTable({teams}) {
  return (
    <>
      {teams.map((team) => (
        <TeamSectie key={team.id} team={team.name} onDelete={() => {}}/>
      ))}
    </>
    )
}
