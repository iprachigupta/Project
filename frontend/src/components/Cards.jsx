// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function Card({ title, days, amount }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-zinc-400 shadow-sm">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-500 mb-2">{days} days left</p>
      <p className="font-bold">{amount}</p>
    </div>
  );
}

export default Card;
