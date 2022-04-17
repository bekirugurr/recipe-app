import styled from "styled-components";

export const BannerWrapper = styled.div`
  padding:0 4rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: #f9f2f2;
  background-image: linear-gradient(to right, #ada6fe, #c893e6, #db80c8, #e570a5, #e46581);
  border-bottom: 3px solid rgb(240, 84, 84);


`;
export const Logo = styled.div`
display: flex;
justify-content: flex-start;
`
export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;
export const LogoImg = styled.img`
height: 8rem;
left: 13rem;
`

export const LogotTop = styled.div`
  color: rgb(200, 6, 6);
  font-size: 5rem;
  font-family: "Stalemate", cursive;
`;

export const LogoBottom = styled.div`
  color: #89dc02;
  padding-left: 1rem;
  margin-top: -3rem;
  font-size: 2.5rem;
  font-family: "Cinzel", serif;
`;
export const BannerRight = styled.div`
  font-family: "Waterfall", cursive;
  font-size: 3.5rem;
  word-spacing: 1rem;
  color: white;
  span {
    color: #89dc02;
  }
  @media (max-width: 846px){
     display: none;
  }
`;
