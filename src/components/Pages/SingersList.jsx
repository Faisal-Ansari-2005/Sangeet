import React from 'react';
import 'SingersList.css';

const SingersList = ({ singers }) => {
  return (
    <div className='singers-list'>
      {singers.map((singer, index) => (
        <div key={index} className='singer-item'>
          <img src={singer.imageUrl} alt={singer.name} />
          <div className='singer-details'>
            <h2>{singer.name}</h2>
            <p>Category: {singer.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingersList;