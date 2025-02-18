import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaArrowUp } from "react-icons/fa6";

function GoToTopDown() {
    const [isVisible, setIsVisible] = useState(false)

    const goToTop = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    const listenToScroll = () => {
        const height = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(winScroll)
        if(winScroll > height){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    useEffect(() => {
      window.addEventListener("scroll", listenToScroll)
      return ()=>window.removeEventListener('scroll', listenToScroll)
    }, [])
    
  
    return (
        <Wrapper>
            {isVisible && (
            <div className="top-btn" onClick={goToTop} >
                <FaArrowUp className="top-btn--icon" />
            </div>)}
        </Wrapper>
    
  )
};
const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;

.top-btn {
font-size: 2.4rem;
width: 6rem;
height: 6rem;
color:#fff;
background-color: ${({theme})=>theme.colors.btn};
border-radius:50%;
box-shadow: ${({theme})=>theme.colors.shadow};
position: fixed;
bottom:5rem;
right:5rem;
z-index:999;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}

&--icon{ animation: gototop 1.2s linear infinite alternate-reverse };

@keyframes gototop {
0% {
transform: translate(-0.5rem)}
100% { transform: translate (1rem) };
}
`

export default GoToTopDown