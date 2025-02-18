import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import { useGlobalContext } from '../Context'

const Hero = () => {
    const {name, image}= useGlobalContext()
  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className='hero-top-data'>THIS IS ME</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className="hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur deserunt ratione reprehenderit sint error obcaecati eius nisi recusandae quia.
                </p>
                <Button className="btn hireme-btn">
                    <NavLink to="/contact">Hire me</NavLink>
                </Button>
            </div>
            
            {/* image section */}
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt="Hero" className='hero-img'/>
                </picture>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;

.section-hero-data {
display:flex;
flex-direction: column;
align-item: center;
}

.btn {
max-width: 16rem;
}

.hero-top-data {
text-transform: uppercase;
font-weight: 500;
font-size: 1.5rem;
color: ${({theme})=> theme.colors.helper}
}

.hero-heading {
text-transform: uppercase;
font-size: 5rem;
}

.hero-para {
margin-top: 1.5rem;
margin-bottom: 3.4rem;
max-width: 60rem
}

.section-hero-image {
display: flex;
justify-content: center;
align-item: center
}
picture {
text-align: center;
}

.hero-img {
max-width: 80%
}
`

export default Hero