import { useState, useEffect } from "react";
import RecipeCardComp from "../home/RecipeCardComp";
import axios from "axios";
import {MainContainer} from './SavedStyles'

const Saved = () => {
  const [jsonData, setJsonData] = useState([]);

  const baseUrl = "http://localhost:5000/foods";

  const getFoodsInfos = () => {
    axios
      .get(baseUrl)
      .then((res) => setJsonData(res.data))
      .catch((error) => {
        console.log("SAVED FOODS -- DB json hatası ->", error);
      });
  };

useEffect(() => {
  getFoodsInfos()
}, [])


const savedFoods = jsonData.filter(item => item.isSaved)
console.log('SAVED FOODS  ------> ', savedFoods);


  return (
    <div>
     {savedFoods ? (
        <MainContainer>
          {savedFoods.map((item) => (
            <RecipeCardComp
              key={item.card.label}
              recipe={item.card}
              jsonData={jsonData}
            />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Saved;
