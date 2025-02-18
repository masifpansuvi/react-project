import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

function Error() {
    
  return (
    <Wrapper>
        <img src="../Images/error.svg" alt="error" className='image'/>
        <NavLink to="/">
          <Button className='btn'>Go Back</Button>
        </NavLink>
    </Wrapper>

  )
}
const Wrapper = styled.section`

padding: 9rem 0;
display: flex;
justify-content: center;
align-item: center;
flex-direction: column;

NavLink { font-size: 1.8rem;
margin-top: 3rem;
display: flex;
align-item: center;
justify-content: center;  }

img { 
max-wdith: 60%;
max-height: 30%
}
`;

export default Error