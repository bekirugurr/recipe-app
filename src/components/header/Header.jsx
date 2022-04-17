
import React from 'react'
import {HeaderContainer, MainHeader} from "./HeaderStyles";
import Form from "./Form";
const Header = ({setQuery,setMealType,getData,mealTypes, mealType, query}) => {
  return (
   <HeaderContainer>
<MainHeader>Food App</MainHeader>

<Form  setQuery={setQuery}
getData={getData}
mealTypes={mealTypes}
setMealType={setMealType}
query={query}
mealType={mealType}
/>

   </HeaderContainer>
  )
}

export default Header