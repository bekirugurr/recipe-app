import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  background-color: #faeded;
  outline: none;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
`;
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 980px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //position: relative;
  outline: none;
  @media (max-width: 980px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%; 
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const MenuLink = styled(NavLink)`
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: rgb(200, 6, 6);
  transition: all 0.1s ease-in;
  font-size: 1.5rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  background-color: #faeded; 

  &:hover {
    color: white;
    background-color: rgb(240, 84, 84);
    border-bottom: 3px solid rgb(240, 84, 84);
  }
  @media (max-width: 980px) {
    border: 1px solid rgb(200, 6, 6);
    border-radius: 10px;
    width: 91%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const OuterLink = styled.a`
  outline: none;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: rgb(200, 6, 6);
  transition: all 0.1s ease-in;
  font-size: 1.5rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  background-color: #faeded;

  &:hover {
    color: white;
    background-color: rgb(240, 84, 84);
    border-bottom: 3px solid rgb(240, 84, 84);
  }
  @media (max-width: 980px) {
    border: 1px solid rgb(200, 6, 6);
    border-radius: 10px;
    width: 91%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const TextLink = styled.p`
font-size: 1.5rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  background-color: #faeded;
`

// export const A = styled.a`
//   cursor: pointer;
//   text-align: center;
//   text-decoration: none;
//   color: #02475e;
//   transition: all 0.3s ease-in;
//   font-size: 2rem;
//   font-family: "Girassol", sans-serif;
//   &:hover {
//     color: #00adb5;
//     font-weight: bold;
//   }
//   @media (max-width: 768px) {
//     /* hamburger meydana çıktığında (tıklanınca açılan merdiven, Menu deki ölçüyle aynı olmalı) */
//     background-color: #e1f1dd;
//     border: 1px solid #00adb5;
//     border-radius: 10px;
//     width: 100%;
//     height: 67px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;
// export const ExtrnlLink = styled(ExternalLink)`
//   cursor: pointer;
//   text-align: center;
//   text-decoration: none;
//   color: #02475e;
//   transition: all 0.3s ease-in;
//   font-size: 2rem;
//   font-family: "Girassol", sans-serif;
//   &:hover {
//     color: #00adb5;
//     font-weight: bold;
//   }
//   @media (max-width: 768px) {
//     /* hamburger meydana çıktığında (tıklanınca açılan merdiven, Menu deki ölçüyle aynı olmalı) */
//     background-color: #e1f1dd;
//     border: 1px solid #00adb5;
//     border-radius: 10px;
//     width: 100%;
//     height: 67px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;
