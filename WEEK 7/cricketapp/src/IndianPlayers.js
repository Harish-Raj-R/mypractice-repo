// src/IndianPlayers.js

import React from 'react';

const IndianPlayers = () => {
  const team = [
    "Virat Kohli", "Rohit Sharma", "Shubman Gill", "KL Rahul", "Hardik Pandya",
    "Ravindra Jadeja", "MS Dhoni", "R. Ashwin", "Jasprit Bumrah", "Mohammed Shami", "Kuldeep Yadav"
  ];

  const evenTeam = team.filter((_, index) => index % 2 === 0); // 0, 2, 4...
  const oddTeam = team.filter((_, index) => index % 2 === 1);  // 1, 3, 5...

  const T20players = ["Surya Kumar Yadav", "Ishan Kishan", "Dinesh Karthik"];
  const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane", "Karun Nair"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
