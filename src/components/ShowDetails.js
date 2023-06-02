import React from 'react';
import './index.css';

const ShowDetails = ({ show, onBookTicket }) => {
  return (
    <>
    <div className='show-card'>
      <h2 className='head'>{show.name}</h2>
      </div>
      
      <img src={show.image && show.image.original} alt={show.name} className='photo'/>
      
      <p>{show.summary}</p>
    
    <div className='btn'>
     <button className="btn btn-primary" onClick={() => onBookTicket(show.name)}>Book Ticket</button>
     </div>
     </>
  );
};

export default ShowDetails;
