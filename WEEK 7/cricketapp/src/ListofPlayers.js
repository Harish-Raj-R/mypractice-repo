// src/ListofPlayers.js

import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 72 },
    { name: "Shubman Gill", score: 43 },
    { name: "KL Rahul", score: 55 },
    { name: "Hardik Pandya", score: 32 },
    { name: "Ravindra Jadeja", score: 28 },
    { name: "MS Dhoni", score: 90 },
    { name: "R. Ashwin", score: 15 },
    { name: "Jasprit Bumrah", score: 8 },
    { name: "Mohammed Shami", score: 10 },
    { name: "Kuldeep Yadav", score: 20 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score} runs</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score} runs</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
