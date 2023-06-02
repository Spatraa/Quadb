import React, { useState, useEffect } from 'react';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';
import './App.css';

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [bookingMovie, setBookingMovie] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  const handleShowClick = show => {
    setSelectedShow(show.show);
  };

  const handleBookTicket = movieName => {
    setBookingMovie(movieName);
  };

  return (
    <div className="container">
      {bookingMovie ? (
        <BookingForm movieName={bookingMovie} />
      ) : selectedShow ? (
        <ShowDetails show={selectedShow} onBookTicket={handleBookTicket} />
      ) : (
        <ShowList shows={shows} onShowClick={handleShowClick} />
      )}
    </div>
  );
};

export default App;
