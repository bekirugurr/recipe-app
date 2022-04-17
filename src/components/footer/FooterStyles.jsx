import styled from "styled-components";

export const FooterWrapper = styled.div`
width:100%;
height: 6rem;
position: absolute;
bottom: -20;
border-top: 3px solid black;
background-color: #6a7275;
color: white;
padding: 0.5rem 2rem;
display: flex;
justify-content: center;
text-align: center;
@media (max-width: 845px) {
    height: 4rem;
  }
@media (max-width: 680px) {
    display: none;
  }
`

export const NameDiv = styled.div`
  font-family: "Stalemate", cursive;
 font-size: 3rem;
 border-right: 2px solid white;
 border-left: 2px solid white;
 padding: 0 4rem;
 display: flex;
 flex-direction: column;
justify-content: center;
 @media (max-width: 935px) {
 padding: 0 1.5rem;
 font-size: 2rem;

  }

`
export const Info = styled.div`
 border-right: 2px solid white;
 padding: 0 4rem;
 font-size: 1.3rem;
 display: flex;
 flex-direction: column;
justify-content: flex-start;
align-items: flex-start ;
font-weight: bold;
color: black;
@media (max-width: 845px) {
    font-size: 1rem;
    padding:0 1rem;
  }

`
export const MyLink = styled.a`
color: black;
margin-right: 1rem;
@media (max-width: 845px) {
    padding-top:0 ;
    padding-bottom:0 ;
  }
`

export const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #9a9696;
  display: flex;
justify-content: center;
align-items: center;
border-radius:50%;
border: none;
font-size: 1.4rem;
color: white;
margin-left:0;
align-self: flex-start;
@media (max-width: 845px) {
    font-size: 1rem;
    width: 2rem;
  height: 2rem;
  }

`
export const InnerDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`