import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./Images/webLogo.png" alt="logo" className='logo' />
        </NavLink>
        <Navbar />
    </MainHeader>
  )
};

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 8rem;
background-color: rgb(240, 245, 245);
display: flex;
justify-content: space-between;
align-items: center;

.logo {
  height: auto;
  max-width: 30%;
}
`;

export default Header