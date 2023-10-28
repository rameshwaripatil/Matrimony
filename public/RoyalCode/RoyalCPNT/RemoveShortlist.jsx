import React, { useState } from 'react';
import { toast } from 'react-toastify';
import AuthUser from '../../auth/Authuser';
import { useEffect } from 'react';

const RemoveShortlist = ({id}) => {
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

  // Display a toast notification based on the 'filled' state
  
};
  const starStyle = {
    fontSize: '14px', // You can adjust the font size to your desired size
    color:'red',
    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
  };

  return (
    <div onClick={handleClick} style={starStyle}>
      remove
    </div>
  );
};

export default RemoveShortlist;
