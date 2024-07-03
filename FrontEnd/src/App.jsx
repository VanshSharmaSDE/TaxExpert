import React, { useState } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Admin from './components/Admin/Admin';
import Login from './components/Login'
import { useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, SetData, ShowLoading } from './components/redux/rootSlice';
import Starter from './components/Starter';

function App() {

  const { loading , data } = useSelector(state => state.root)
  const dispatch = useDispatch();
  const getdata = async () => {
    try {
      dispatch(ShowLoading())
      const response = await axios.get('https://taxexpertserver.onrender.com/get-data')
      dispatch(SetData(response.data))
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading()) 
    }
  }

  useEffect(() => {
    if(!data){
      getdata();
    }
  }, [data])

  

  return (
    <>
      {loading ? <Loader></Loader> : null}
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
