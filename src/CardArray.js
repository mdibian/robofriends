import React from 'react';
import Card from './Card.js';

const CardArray = ({ robots }) => {

  const cardComponents = robots.map(user => {
  	return (
  	  <Card 
  	   key={user.id} 
  	   id={user.id} 
  	   name={user.name} 
  	   email={user.email}
  	  />
  	);
  })

  return (
    <div className='container'>
      {cardComponents}
    </div>
  );
}

export default CardArray;