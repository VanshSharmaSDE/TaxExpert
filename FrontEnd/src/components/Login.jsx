import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { HideLoading, SetData, SetToken, ShowLoading } from './redux/rootSlice';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [admin,setAdmin] = useState({
    username : '',
    password : '', 
  })
  const login = async ()=>{
     try {
      dispatch(ShowLoading())
      const response = await axios.post('https://taxexpertserver.onrender.com/admin-login',admin)
      dispatch(HideLoading())
      if(response.data.success){
         message.success(response.data.message)
         dispatch(SetToken(response.data.token))
         localStorage.setItem("token",response.data.token)
         navigate('/admin')
      }else{
        message.error(response.data.error)
      }
     } catch (error) {
      dispatch(HideLoading())
      message.error("Invalid username Or password")
     }
  }
  return (
    <>
  {/* Background */}
  <div id="gradient-bg">
    <div className="gradient-container">
      <div className="gradient1" />
      <div className="gradient2" />
      <div className="gradient3" />
      <div className="gradient4" />
      <div className="gradient5" />
    </div>
  </div>
  <form id="form-container">
    <h1 className="title">Admin - Login</h1>
    <div className="label">Username</div>
    <input 
    type="text" 
    id="username" 
    name="username" 
    required=""
    value={admin.username}
    onChange={(e)=>setAdmin({...admin , username : e.target.value})} />
    <div className="label">Password</div>
    <input 
    type="password" 
    id="password" 
    name="password" 
    required="" 
    value={admin.password}
    onChange={(e)=>setAdmin({...admin , password : e.target.value})}/>
    <input
      type="button"
      className="submit"
      defaultValue="Log in"
      onClick={login}
    />
  </form>
</>

  )
}

export default Login