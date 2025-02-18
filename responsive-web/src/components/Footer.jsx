import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {

  return ( 
    <Wrapper>
      <section className="content-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started ?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="start-btn">
            <NavLink>
              <Button>GET STARTED</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section */}

      <footer>
        <div className="container grid grid-four-column">
          <div className='footer-about'>
            <h3>Pansuvi Technical</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cupiditate?</p>
          </div>
          <div className='footer-subs'>
            <h3>Subscribe to get important updates</h3>
            <form action="#">
            <input 
            type="email"
            placeholder='email'
            autoComplete='off'
            required
            />
            </form>
            <input value="SUBSCRIBE" type="submit" />
          </div>
          <div className='footer-social'>
            <h3>Follow Us</h3>
            <div className="footer-social-icon">
              <div>
                <FaDiscord className="icons"/>
              </div>
              <div>
                <FaInstagram className="icons"/>
              </div>
              <div>
                <FaYoutube className="icons"/>
              </div>
            </div>
          </div>
          <div>
            <h3>Call Us</h3>
            <p>+923412707352</p>
          </div>
        </div>

        <div className="footer-bottom-section">
          <hr/>
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} PansuviTechnical. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS AND CONDITION</p>
            </div> 
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.content-short {
max-width: 60vw;
margin: auto;
padding: 5rem 10rem;
background-color: rgb(240 235 255);
border-radius: 1rem;
box-shadow: ${({theme})=> theme.colors.shadowSupport};
// transform: translateY(50%);

.grid div:last-child { justify-self: end; align-self: center; }

}

footer {
padding: 14rem 0 9rem 0;
background-color: ${({theme})=>theme.colors.footer_bg};

.footer-social-icon {display:flex; justify-content: flex-start; align-item: center; gap:2rem;
div { padding: 1rem; border-radius: 50%; border: 2px solid ${({theme})=>theme.colors.white}}
.icons { font-size: 2.4rem; color: ${({theme})=> theme.colors.white}; positon: realtive; cursor:pointer;}; 
}

.footer-bottom-section{ padding-top: 5rem;
hr{ color: ${({theme})=> theme.colors.hr}; margin-bottom: 2rem; height: 0.1px }
};


h3{ color: ${({theme})=>theme.colors.hr}; margin-bottom: 2rem; }
p { color: ${({theme})=> theme.colors.white} }

form{ margin-bottom: 2rem;}
}

`;

export default Footer;