import React from 'react'
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';


export default function Layout({user,setUser}) {
  let navigate = useNavigate();

  function logOut(){
    localStorage.removeItem("userToken");
    setUser(null);
    navigate('/login')
  }
  return (
    <>
      <Navbar user = {user} logOut = {logOut}/>
      <NavigationBar />
        {/* <div className='container'> */}
        <Outlet></Outlet>
        {/* </div> */}
      <Footer/>
    </>
  )
}
