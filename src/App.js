import React, { Children, useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import jwt_decode from "jwt-decode";
import SendCode from './Components/SendCode/SendCode';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import CheckEmail from './Components/CheckEmail/CheckEmail';
import { CartContextProvider, ProductContextProvider } from './Components/Context/CartStore';
import Products from './Components/Products/Products';
import ProductDetails from './Components/Products/ProductDetails';
import { ToastContainer } from 'react-toastify';
import Cart from './Components/Cart/Cart';





export default function App() {

  let[user,setUser] = useState(null);

  function saveCurentYser(){
    let token = localStorage.getItem("userToken")
    let decoded = jwt_decode(token)
    setUser(decoded);

  }

 

  useEffect(()=>{
    if(localStorage.getItem("userToken")){
      saveCurentYser();
    }
  },[])

  let routers = createBrowserRouter([
    {path : '', element : <Layout user = {user} setUser = {setUser}/>,children:[
      {index: true , element :<Home/> },
      {path :'register', element : <Register />},
      {path :'SendCode', element : <SendCode />},
      {path :'checkEmail', element : <CheckEmail />},
      {path :'changePassword', element : <ChangePassword />},
      {path :'products/:category', element :<Products />},
      {path :'products/category/:id', element :<ProductDetails />},
      {path :'cart', element : <Cart />},
      {path :'login', element : <Login saveCurentYser = {saveCurentYser}/>},
      {path :'*', element : <NotFound />}
    ]}
  ])
  
 
  return (
    <CartContextProvider>
      <ToastContainer />
      <RouterProvider router = {routers}></RouterProvider>
    </CartContextProvider>
  )
}
