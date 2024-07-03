import React, { useEffect } from 'react'
import './Admin.css'
import '../CSS/navbar.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
import AdminExperience from './AdminExperience'
import { useSelector } from 'react-redux'


function Admin() {


  const { data } = useSelector(state => state.root)
  const { token } = useSelector(state => state.root)
  const navigate = useNavigate()
  
  useEffect(() => {
     const tempToken = localStorage.getItem("token")
     if(token === tempToken){
       navigate('/admin')
     }else{
      navigate('/login')
     }
  },[])
  

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Home',
      children: <AdminIntro/>,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout/>,
    },
    {
      key: '3',
      label: 'Experience',
      children: <AdminExperience/>,
    },
  ];

  const [menuVisible, setMenuVisible] = useState(false);
  const [hamburgerClose, setHamburgerClose] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setHamburgerClose(!hamburgerClose);
  };

  const logout=()=>{
     localStorage.setItem("token",'')
     navigate('/')
  }

  return (

    <>
      {data && <>
        <nav>
        <div className="navbar">
          <div className="navbar-left">
            <img src="https://res.cloudinary.com/utkarashcloud/image/upload/v1719674567/Logo_e0pxdq.png" alt="" />
          </div>
          <div className="navbar-mid">
            <Link to="/admin">
              <h1>Dashboard</h1>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="social-link">
              <a  onClick={logout}>
                <i class="ri-login-circle-line" ></i>
              </a>
            </div>
            <div className={hamburgerClose ? 'hamburger close' : 'hamburger'}
              onClick={toggleMenu} id="hamburger">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
            <div className={menuVisible ? 'menu visible' : 'menu'} id="menu">
              <ul>
                <li className="cl1" onClick={toggleMenu}>
                  <i className="ri-home-7-fill" />
                  <a href="#Home">Dashboard</a>
                </li>
                <li>
                  <a onClick={logout}>
                    <i class="ri-login-circle-line" ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="admin-main">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      </>}
    </>

  )
}

export default Admin