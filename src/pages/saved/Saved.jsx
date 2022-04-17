import { useState, useEffect } from "react";
import RecipeCardComp from "../home/RecipeCardComp";
import axios from "axios";
import { MainContainer, HomeImg, ImgDiv } from "./SavedStyles";
import homeSvg from "../../assets/home.svg";

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
    getFoodsInfos();
  }, []);

  let savedFoods = jsonData?.filter((item) => item.isSaved);

  console.log("SAVED FOODS  ------> ", !savedFoods);

  return (
    <div>
      {savedFoods.length ? (
        <MainContainer>
          {savedFoods.map((item) => (
            <RecipeCardComp
              key={item.card.label}
              recipe={item.card}
              savedFood={item}
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
