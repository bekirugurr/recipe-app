import styled from "styled-components";

export const LoginContainer = styled.div`
  /* resmin olduğu div */
background-image: url("https://picsum.photos/1600/900");  

background-repeat: no-repeat;
  height: 81vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  /* yuvarlak yer */
  width: 600px;
  min-width: 600px;
  height: 600px;
  background-color: rgba(234, 113, 104, 0.6);
  border-radius: 50%;
  border: 2px solid red;
  padding: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: white;
  font-size: 3rem;
  width: 30rem;
  text-align: center;
`;

export const StyledInput = styled.input`
  /* username giriş inputları */
  height: 3.5rem;
  font-size: 2rem;
  width: 250px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
  height: 3.5rem;
  border-radius: 5px;

`;

export const StyledImg = styled.img`
  width: 150px;
  //margin: 1rem;
`;