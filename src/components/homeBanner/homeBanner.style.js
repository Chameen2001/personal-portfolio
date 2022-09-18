import { Grid } from "@mui/material";
import styled from "styled-components";
import myImage from "../../assets/images/MyImage-black.png";

export const MainBanner = styled(Grid)`
  height: 100%;
`;

export const SubBanner = styled(Grid)`
  
`;

export const MyImage = styled.div`
  width: 635px;
  height: 1200px;
  background-image: url(${myImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 1980px) {
    width: 420px;
    height: 800px;
  }

  @media (max-width: 1440px) {
    width: 340px;
    height: 650px;
  }

  @media (max-width: 1024px) {
    width: 340px;
    height: 650px;
  }

  @media (max-width: 768px) {
    background-image: none;
    width: initial;
    height: initial;
  }

  /* @media (max-width: 2220px) and (max-height: 1350px) {
    height: 1024px;
    width: 510px;
  }

  @media (max-width: 1920px) and (max-height: 1080px) {
    height: 860px;
    width: 460px;
  }

  @media (max-width: 1870px) and (max-height: 1220px) {
    height: 860px;
    width: 460px;
  }

  @media (max-width: 1520px) and (max-height: 1050px) {
    height: 750px;
    width: 400px;
  }

  @media (max-width: 1250px) and (max-height: 920px) {
    height: 560px;
    width: 300px;
  } */
`;

export const ImageGrid = styled(Grid)`
  height: 100%;

  @media (max-width: 768px) {
    height: initial;
    width: initial !important;
  }
`;
