// src/FlightList.js

import React from 'react';

const flights = [
  { id: 1, from: 'Chennai', to: 'Delhi', time: '10:00 AM', price: 3500 },
  { id: 2, from: 'Mumbai', to: 'Bangalore', time: '12:30 PM', price: 4200 }
];

const FlightList = ({ canBook }) => {
  return (
    <div>
      <h3>Flight Details</h3>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} → {flight.to} | {flight.time} | ₹{flight.price}
            {canBook && (
              <button onClick={() => alert("Ticket booked!")}>Book</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
