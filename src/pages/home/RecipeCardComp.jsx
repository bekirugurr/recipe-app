import React, { useEffect, useState } from "react";
import {
  RecipeImage,
  RecipeCard,
  RecipeHeader,
  RecipeCuisine,
  SideBar,
  IconWrapper,
  SavedDiv,
  ShareBar,
} from "./HomeStyles";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";
import { FiShare2 } from "react-icons/fi";
import {
  FaRegHeart,
  FaRegBookmark,
  FaBookmark,
  FaHeart,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

import axios from "axios";
const cardIconStyles = {
  color: "#eb5a77",
  width: "1.7rem",
  height: "1.7rem",
  cursor: "pointer",
};
const savedIconStyle = {
  fontSize: "2.5rem",
  color: "#12161ad5",
  cursor: "pointer",
};

const RecipeCardComp = ({
  recipe,
  // addJsonData,
  jsonData,
  // likedFoods,
  // setLikedFoods,
  // savedFoods,
  // setSavedFoods,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  // const [isLiked, setIsLiked] = useState(likedFoods.includes(recipe.label));
  // const [isSaved, setIsSaved] = useState(savedFoods.includes(recipe.label));
  //const [isHideShareBar, setIsHideShareBar] = useState(true);

  console.log(isLiked, isSaved);

  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };
  //console.log(likedFoods);

  //! Yemek isimlerinin sonunda bazısının recipe bazısının ise recipes yazıyordu. Böyle olanları traşladım
  const recipeHeader =
    recipe.label.slice(-6).toLowerCase() == "recipe" ||
    recipe.label.slice(-7).toLowerCase() == "recipes"
      ? recipe.label.slice(0, -7)
      : recipe.label;

  const baseUrl = "http://localhost:5000/foods";

  //! like butonun tıklandığında beğenildi ise beğenilenlere ekleme, tersi ise beğenilenlerden silme

  const addJsonData = (uri, isLiked, isSaved, recipe) => {
    axios
      .post(`${baseUrl}`, {
        uri: uri,
        isLiked: isLiked,
        isSaved: isSaved,
        card: {
          label: recipe.label,
          image: recipe.image,
          cuisineType: recipe.cuisineType,
        },
      })
      .then((res) => {
        setRecipeId(res.data.id);
        console.log(res.data);
      })
      .catch((error) => console.log("addJsonData error -->", error));
    setIsPosted(true);
  };

  const changeJsonData = async (id, uri, isLiked, isSaved, recipe) => {
    try {
      await axios.put(`${baseUrl}/${id}`, {
        id: id,
        uri: uri,
        isLiked: isLiked,
        isSaved: isSaved,
        card: {
          label: recipe.label,
          image: recipe.image,
          cuisineType: recipe.cuisineType,
        },
      });
    } catch (error) {
      console.log("error about DBJSON -->", error);
    }
  };

  useEffect(() => {
    jsonData.map((data) => {
      if (data.uri === recipe.uri) {
        setIsLiked(data.isLiked);
        setIsSaved(data.isSaved);
        setIsPosted(true);
        setRecipeId(data.id);
      }
    });
  }, []);

  const handleLike = (e) => {
    e.stopPropagation();
    isPosted
      ? changeJsonData(recipeId, recipe.uri, !isLiked, isSaved, recipe)
      : addJsonData(recipe.uri, !isLiked, isSaved, recipe);
    setIsLiked(!isLiked);
  };

  //! save butonun tıklandığında kaydedildi ise kaydedilenlere ekleme, tersi ise kaydedilenlerden silme

  const handleSave = (e) => {
    e.stopPropagation();
    isPosted
      ? changeJsonData(recipeId, recipe.uri, isLiked, !isSaved, recipe)
      : addJsonData(recipe.uri, isLiked, !isSaved, recipe);
    setIsSaved(!isSaved);
  };

  //! share iconuna tıklandığında share bar ının görünmesi barın üzerinden onMouseOut yapıldığında barın gizlenmesi

  return (
    <RecipeCard onClick={moreClick}>
      <RecipeCuisine>
        {recipe.cuisineType[0].toUpperCase()} CUISINE
      </RecipeCuisine>
      <RecipeHeader>{recipeHeader}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} />

      <SideBar /* style={isHideShareBar ? {display:'flex'} : {display:'none'}} */
      >
        <IconWrapper /* onClick={setIsHideShareBar(false)} */>
          <FiShare2 style={cardIconStyles} />
        </IconWrapper>
        <IconWrapper onClick={handleLike}>
          {isLiked ? (
            <FaHeart style={{ ...cardIconStyles, color: "crimson" }} />
          ) : (
            <FaRegHeart style={cardIconStyles} />
          )}
        </IconWrapper>
        {!isSaved && (
          <IconWrapper onClick={handleSave}>
            <FaRegBookmark style={{ ...cardIconStyles, marginBottom: "0" }} />
          </IconWrapper>
        )}
      </SideBar>

      {/* <ShareBar  style={isHideShareBar ? {display:'none'} : {display:'flex'}} >
        <IconWrapper>
          <RiWhatsappFill style={{ ...cardIconStyles, color: "green" }} />
        </IconWrapper>
        <IconWrapper>
          <FaTwitter style={{ ...cardIconStyles, color: "#1DA1F2" }} />
        </IconWrapper>
        <IconWrapper>
          <GrInstagram style={{ ...cardIconStyles, color: "#E7444B" }} />
        </IconWrapper>
      </ShareBar>*/}

      {isSaved && (
        <SavedDiv onClick={handleSave}>
          <FaBookmark style={savedIconStyle} />
        </SavedDiv>
      )}
    </RecipeCard>
  );
};

export default RecipeCardComp;

//! BURAYI SOR

// let likedFoodsIds = JSON.parse(localStorage.getItem("likedFoods"))
//     ?? [];

// let locelIsLike = likedFoodsIds.includes(recipe.label)
// console.log(locelIsLike);

// if (locelIsLike) {
//   setIsLiked(true);
// }

//   useEffect(() => {
//     if (isLiked) {
//       likedFoodsIds.push(recipe.label);
//       localStorage.setItem("likedFoods", JSON.stringify(likedFoodsIds));
//       console.log(likedFoodsIds);
//     } else {
//       const recipeIndex = likedFoodsIds?.findIndex((item)=>item==recipe.label)
//       likedFoodsIds.splice(recipeIndex, 1);
//       // let newLikedFoodsIds = likedFoodsIds.filter(
//       //   (item) => item != recipe.label
//       // );
//       localStorage.setItem("likedFoods", JSON.stringify(likedFoodsIds));
//     }
//   }, [isLiked]);

// localStorage.setItem("likedFoods", JSON.stringify(['Egg Nests recipes', 'Egg Pancakes' ]));
// let deneme = JSON.parse(localStorage.getItem('likedFoods'))
// console.log(deneme)
