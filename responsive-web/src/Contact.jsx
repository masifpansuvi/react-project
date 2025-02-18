import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyled";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 6rem 0rem;
    .container {
      margin-top: 6rem;
      text-align: center;
  

    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        gap: 2rem;
        flex-direction: column; 

        input[type="submit"]{
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
        background-color: ${({theme})=>theme.colors.white};
        border: 1px solid ${({theme}) => theme.colors.btn};
        color: ${({theme})=> theme.colors.btn};
        transition: scale(0.9);
        }
        }
      }
    }
    }
  `;
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Feel Free To Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.563584444463!2d72.91020927418087!3d33.97805497318499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb29116f4f94f%3A0xaf454a05b9dadc43!2sThe%20University%20of%20Haripur!5e0!3m2!1sen!2s!4v1731991390836!5m2!1sen!2s"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xldelbnj" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="5"
              autoComplete="off"
              placeholder="Please write something here!"
              required
            ></textarea>

            <input 
            type="submit"
            value="Send" 
            />

          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
