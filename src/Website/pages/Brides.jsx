// BridePage.js

import React, { useState } from 'react';

const Brides = () => {
  const [brideInfo, setBrideInfo] = useState({
    name: '',
    age: '',
    bio: '',
    location: '',
    occupation: '',
    hobbies: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBrideInfo({ ...brideInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bride Information Submitted:', brideInfo);
    // Add logic to save bride information to the database or perform other actions
  };

  return (
    <div className="bride-page-container">
      <h2>Bride's Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={brideInfo.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={brideInfo.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={brideInfo.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Occupation:
          <input
            type="text"
            name="occupation"
            value={brideInfo.occupation}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Hobbies:
          <input
            type="text"
            name="hobbies"
            value={brideInfo.hobbies}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            name="bio"
            value={brideInfo.bio}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save Information</button>
      </form>
    </div>
  );
};

export default Brides;
