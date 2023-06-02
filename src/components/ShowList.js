import React from 'react';
import './style.css';

const ShowList = ({ shows, onShowClick }) => {
  return (
    <>
      <h2 className='head'>TV Shows</h2>
      {shows.map((show,index) => (
        <>
        <div className="show-card" key={show.show.index}>
          <h3 className='head'>{show.show.name}</h3>
          <img src={show.show.image && show.show.image.medium} alt={show.show.name}/>
        </div>
        <div className='btn'>
        <button className="btn btn-primary" onClick={() => onShowClick(show)}>View Summary</button>
        </div>
        </>
      ))}
    </>
  );
};

export default ShowList;
