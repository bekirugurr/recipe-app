import React from "react";
import {
  BannerRight,
  BannerWrapper,
  LogoText,
  LogoBottom,
  LogotTop,
  LogoImg,
  Logo,
} from "./BannerStyles";
import LogoHat from "../../assets/logo-hat.png";

const Banner = () => {
  return (
    <BannerWrapper>
      <Logo>
        <LogoImg src={LogoHat} alt="" />
        <LogoText>
          <LogotTop>Bekir's</LogotTop>
          <LogoBottom>RECIPES</LogoBottom>
        </LogoText>
      </Logo>
      <BannerRight>
        You <span>are</span> what <span>you </span>eat <span> ...</span>
      </BannerRight>
    </BannerWrapper>
  );
};

export default Banner;
