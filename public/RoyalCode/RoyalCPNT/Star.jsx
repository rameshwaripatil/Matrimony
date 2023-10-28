import React, { useState } from 'react';
import { toast } from 'react-toastify';
import AuthUser from '../../auth/Authuser';
import { useEffect } from 'react';

const Star = ({id}) => {
  const {http,user} = AuthUser();


  const [filled, setFilled] = useState(false);
useEffect(()=>{

},[id])
const handleClick = () => {
  // Perform your HTTP request here to toggle the 'status' value
  http
    .get(`/shortlisted/profile/${user.id}/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });

  // Toggle the 'filled' state
  setFilled(!filled);

  // Display a toast notification based on the 'filled' state
  if (!filled) {
    toast.success('Data shortlisted!', {
      position: 'top-right',
      autoClose: 3000,
    });
  } else {
    toast.success('Data unshortlisted!', {
      position: 'top-right',
      autoClose: 3000,
    });
  }
};
  const starStyle = {
    fontSize: '24px', // You can adjust the font size to your desired size
    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
  };

  return (
    <div onClick={handleClick} style={starStyle}>
      {filled ? '★' : '☆'}
    </div>
  );
};

export default Star;
