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

const RecipeCardComp = ({ recipe, jsonData, savedFood }) => {

  const [isLiked, setIsLiked] = useState(savedFood ? savedFood.isLiked : false);
  const [isSaved, setIsSaved] = useState(savedFood ? savedFood.isSaved : false);
  const [isPosted, setIsPosted] = useState(savedFood ? true : false);
  const [recipeId, setRecipeId] = useState(savedFood ? savedFood.id : "");

  const [isHideShareBar, setIsHideShareBar] = useState(true); 
  const [isDisplay, setIsDisplay] = useState('flex')

  console.log(recipe);
  console.log(savedFood, isLiked, isSaved);

  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };

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
          uri: recipe.uri,
          image: recipe.image,
          cuisineType: recipe.cuisineType,
          ingredients: recipe.ingredientLines,
          nutrients: recipe.totalDaily,
        },
      })
      .then((res) => {
        setRecipeId(res.data.id);
        console.log(res.data);
        setIsPosted(true);
      })
      .catch((error) => console.log("addJsonData error -->", error));
  };

  const changeJsonData = (id, uri, isLiked, isSaved, recipe) => {
    axios
      .put(`${baseUrl}/${id}`, {
        id: id,
        uri: uri,
        isLiked: isLiked,
        isSaved: isSaved,
        card: {
          label: recipe.label,
          uri: recipe.uri,
          image: recipe.image,
          cuisineType: recipe.cuisineType,
          ingredients: recipe.ingredientLines,
          nutrients: recipe.totalDaily,
        }, 
      }) 
      .then((res) => { 
        console.log(res.data); 
      })
      .catch((error) => console.log("addJsonData error -->", error));
  };

  useEffect(() => {
    console.log('jsondata ------>', jsonData);
    jsonData?.map((data) => {
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

    if (savedFood){
      setIsDisplay('none')
    }
  };

  console.log('isDisplay', isDisplay);

  return (
    <RecipeCard onClick={moreClick} style={{display: isDisplay}}>
      <RecipeCuisine>
        {recipe.cuisineType[0].toUpperCase()} CUISINE
      </RecipeCuisine>
      <RecipeHeader>{recipeHeader}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} />

      {isHideShareBar ? (
        <SideBar>
          <IconWrapper  onClick={(e)=>{
            e.stopPropagation();
            setIsHideShareBar(!isHideShareBar);
            }}>
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
      ) : (
        <ShareBar 
          style={isHideShareBar ? { display: "none" } : { display: "flex" }}
         >
            <IconWrapper  onClick={(e)=>{
            e.stopPropagation();
            setIsHideShareBar(!isHideShareBar);
            }} style={{backgroundColor:'#597d7db9'}}>
            <FiShare2 style={cardIconStyles} />
          </IconWrapper>
          <IconWrapper>
            <RiWhatsappFill style={{ ...cardIconStyles, color: "green" }} />
          </IconWrapper>
          <IconWrapper>
            <FaTwitter style={{ ...cardIconStyles, color: "#1DA1F2" }} />
          </IconWrapper>
          <IconWrapper>
            <GrInstagram style={{ ...cardIconStyles, color: "#E7444B" }} />
          </IconWrapper>
        </ShareBar>
      )}

      {isSaved && (
        <SavedDiv onClick={handleSave}>
          <FaBookmark style={savedIconStyle} />
        </SavedDiv>
      )}
    </RecipeCard>
  );
};

export default RecipeCardComp;
