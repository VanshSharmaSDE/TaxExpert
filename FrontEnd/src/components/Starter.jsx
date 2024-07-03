import React from 'react'
import Home from './Home'
import { useSelector } from 'react-redux'


function Starter() {
    const {  data } = useSelector(state => state.root)
  return (
    <div>
        {data && <Home></Home>}
    </div>
  )
}

export default Starter