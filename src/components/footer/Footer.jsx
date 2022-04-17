import React from "react";
import {
  FooterWrapper,
  Info,
  NameDiv,
  MyLink,
  IconWrapper,
  InnerDiv,
} from "./FooterStyles";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <NameDiv>Bekir Uğur </NameDiv>
      <Info>
        <InnerDiv style={{paddingBottom:'.5rem'}}>Contact me:</InnerDiv>
        <InnerDiv >
          <MyLink href="https://www.linkedin.com/in/bekiru%C4%9Fur/"  target='_blank'>
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
          </MyLink>
          <MyLink href="https://github.com/bekirugurr" target='_blank'>
            <IconWrapper>
              <FaGithub />
            </IconWrapper>
          </MyLink>
        </InnerDiv>
      </Info>
      <Info>
        <InnerDiv >
          <MyLink style={{paddingBottom:'.5rem'}}href="mailto:bekirugur070@gmail.com" target='_blank'> Send mail: </MyLink>
        </InnerDiv>

        <InnerDiv>
          <p style={{ color: "white", fontSize: "1rem" }}>
            bekirugur070@gmail.com
          </p>
        </InnerDiv>
      </Info>
    </FooterWrapper>
  );
};

export default Footer;
