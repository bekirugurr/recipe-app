import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { ImgDiv, MainContainer, HomeImg } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";

const APP_ID = "03f3beae";
const APP_KEY = "cd1235f48f2cc02fc6d65c7c782fc95b";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [mealType, setMealType] = useState(mealTypes[0].toLowerCase());
  const [jsonData, setJsonData] = useState([]);

  // const [likedFoods, setLikedFoods] = useState([]);
  // const [savedFoods, setSavedFoods] = useState([]);


//! JSON SERVER da beğenilen, kaydedilen tarifler ile kendi tariflerimizi tutma, alma, değiştirme
const baseUrl = "http://localhost:5000/foods";

const getFoodsInfos = () => {axios
  .get(baseUrl)
  .then((res) => setJsonData(res.data))
  .catch((error) => {
    console.log("DB json hatası ->", error);
  });
};

//! edamam dan istediğimiz tarifleri çekme 

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
      //console.log(result.data.hits);
    } else {
      console.log("please fill the form");
    }
    getFoodsInfos();
  };

  

  // const getFoodsInfos = async () => {
  //   try {
  //     const { data } = await axios.get(baseUrl);
  //     console.log(data);
  //     setJsonData(data);
  //   } catch (error) {
  //     console.log("DB json hatası ->", error);
  //   }
  // };

  useEffect(() => {
    getFoodsInfos();
  }, []);

  // const addJsonData = async (uri, isLiked = false, isSaved = false, card={}) => {
  //   try {
  //     await axios.post(`${baseUrl}`, {
  //       uri: uri,
  //       isLiked: isLiked,
  //       isSaved: isSaved,
  //       card: card
  //     });
  //   } catch (error) {
  //     console.log("error about DBJSON -->", error);
  //   }
  // };

  


  console.log("food", food);
  console.log("jsonData", jsonData);
  
  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMealType={setMealType}
        query={query}
        mealType={mealType}
      />

      {food ? (
        <MainContainer>
          {food.map((item) => (
            <RecipeCardComp
              key={item.recipe.label}
              recipe={item.recipe}
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

export default Home;
