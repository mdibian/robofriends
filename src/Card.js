import React from 'react';
import './Card.css'

const Card = (props) => {
	
	const { name, email, id} = props

	return (
		<div className='card-background grow'>
		  <img alt='a robot' src={`https://robohash.org/${id}?200x200`}/>
		  <div>
		    <h2>{name}</h2>
		    <p>{email}</p>
		   </div>
		</div>
	);
}

export default Card;