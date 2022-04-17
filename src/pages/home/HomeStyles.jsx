import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  /* background: #e1f1dd; */
  height: fit-content;
  /* padding: 5px; */
`;

export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  justify-content: center;
  margin: 50px;
  background-color: #00adb5;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki esas resim */
  width: 80%;
  max-width: 750px;
`;

export const RecipeCard = styled.div`
  position: relative;
  height: 300px;
  //background: #e1f1dd;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 8px black;
  overflow: hidden;

  &:after {
    content: "  ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.3s ease-in;
    border-radius: 5px;
  }
  &:hover:after {
    opacity: 0.6;
  }

  &:hover {
    box-shadow: none;
    transition: all 0.2s ease;
  }
  &:hover img {
    transform: scale(1.3);
    transition: all 0.5s ease;
  }
`;

export const RecipeHeader = styled.div`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.4rem;
  padding: 0.5rem;
  color: white;
  font-weight: bold;
  background-color: #2b22226e;
  width: 100%;
  height: 4.5rem;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;
export const RecipeCuisine = styled.div`
  color: dodgerblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0.2rem 0.5rem;
  font-weight: 600;
  margin-bottom: 4.5rem;
`;

export const RecipeImage = styled.img`
  /* kartların içindeki resimler */
  height: 300px;
  width: 300px;
  border-radius: 5px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
`;

export const SideBar = styled.div`
  position: absolute;
  //background-color: cyan;
  width: 3rem;
  height: 10.rem;
  right: 5px;
  top: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  opacity: 1;
  border-radius:1.5rem;
`;
export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  //background-color: crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background-color: #d3d3d381;
  }
`;
export const SavedDiv = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  //background-color: bisque;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
`;

export const ShareBar = styled.div`
  position: absolute;
  //background-color: #597d7dd4;
  width: 3rem;
  height: 13rem;
  right: 5px;
  top: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  opacity: 1;
`;
// export const Button = styled.button`
//   /* view more  buton */
//   background-color: #00adb5;
//   padding: 5px;
//   outline: none;
//   height: 2rem;
//   border: none;
//   margin: 10px;
//   border-radius: 3px;
//   cursor: pointer;
// `;
