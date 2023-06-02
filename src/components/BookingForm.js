import React, { useState } from 'react';

const BookingForm = ({ movieName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Save user details to local/session storage or make an API call to store the data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Movie:', movieName);
    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Book Ticket - {movieName}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={event => setName(event.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
