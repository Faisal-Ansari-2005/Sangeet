import React from 'react';
import SingersList from './SingersList';

const App = () => {
  const singers = [
    { name: 'Kesariya', category: 'Pop', imageUrl: 'Kesariya.jpg' },
    { name: 'Kesariya', category: 'Rock', imageUrl: 'Kesariya.jpg' },
    // Add more singers and their corresponding image URLs here
  ];

  return (
    <div className='app'>
      <h1>Categorized Singers</h1>
      <SingersList singers={singers} />
    </div>
  );
};

export default App;