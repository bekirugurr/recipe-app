import {useState} from 'react'
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import '../../assets/loginbacgroundImg.jpeg'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();
  const [nameInput, setNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')


//* Default kullanıcı adı ve şifresinin local storageye yüklenmesi

localStorage.setItem('userInfo', JSON.stringify({userName :'user', password: '1234'}))

let userName = JSON.parse(localStorage.getItem('userInfo')).userName
let password =  JSON.parse(localStorage.getItem('userInfo')).password

const handleSubmit = (e) => {
e.preventDefault();
 if ((nameInput == userName) && (passwordInput == password)) {
  navigate("/home");
 } else {
   alert('Wrong inputs. Try name = user, password= 1234 :)')
 }
setNameInput('');
setPasswordInput('')
}



  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>Let the journey of taste begin</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required onChange={(e)=>setNameInput(e.target.value)} value={nameInput}/>
          <StyledInput type="password" placeholder="password" required onChange={(e)=>setPasswordInput(e.target.value)} value={passwordInput}/>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login