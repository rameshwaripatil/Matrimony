import axios from 'axios';
import  { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Authuser = () => {
    const Navigate = useNavigate();
    const getToken = () => {
      const tokenString = sessionStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      return userToken;
    };

    const getUser = () => {
      const userString = JSON.parse(sessionStorage.getItem("user"));
      return userString;
    };

    const saveToken = (user, token) => {
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("user", JSON.stringify(user));
      };

    const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
    const http = axios.create({
       
        baseURL: "http://marriagebureau.ajspire.com/api",
        
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const logout = () => {
        sessionStorage.clear();
        setToken(null);
        setUser(null);
        Navigate("/");
    
      };
      return {
        setToken: saveToken,
        token,
        user,
        http,
        logout,
      };
}

export default Authuser