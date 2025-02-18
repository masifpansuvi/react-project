import React from 'react';
import { useGlobalContext } from './Context';
import { styled } from 'styled-components';
import {NavLink} from 'react-router-dom'
import { Button } from './styles/Button';


const Services = () => {

  const  {services} = useGlobalContext()

  return (
    <Wrappr className="section"> 
      <h2 className='common-heading'>OUR SERVICES</h2>
      <div className="container grid grid-three-column">
        {services.map((currEl)=>{
          const {id, title, image, description} = currEl;
          return(
            <div key={id} className='card'>
                <figure>
                <img src={image} alt={title} />
                </figure>
              
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to= "/services">
                  <Button className='btn'>Read More</Button>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </Wrappr>
  );
};

const Wrappr = styled.section`
padding: 5rem 0;
background-color: ${ ({theme})=>theme.colors.bg };

.container {
padding-top:  2rem;
max-width: 100rem;
}

.card {
border: 0.1rem solid rgb(170 170 170 / 40%) 
}
.card-data{
padding: 0.5rem 2rem;
}
.btn {
margin: 2rem auto;
background-color: rgba(0 0 0 / 0%);
border: 0.1rem solid rgb(98 84 243);
display: flex;
justify-content: center;
align-item: center;
color: rgb(98 84 243);
border-radius: .5rem;

&:hover{ background-color: rgb(98 84 243); color: #fff; }

}



figure{
width: auto;
display: flex;
justify-content: center;
align-item: center;
position: relative;
overflow: hidden;
transition: all 0.5s linear;
&::after{
content: "";
position: absolute;
top: 0;
left: 0;
width: 0;
height: 100%;
background-color: rgba(0,0,0,0.5);
transition: all 0.2s linear;
cursor: pointer;
}
&:hover::after{
width: 100%;
transition: all 0.3s linear;
}
&:hover img {
transform: scale(2,1)
}

img{
max-width: 90%;
margin-top: .5rem;
height: 22rem;
transition: all 0.3s linear;
}
}
`;

export default Services