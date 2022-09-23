import { Grid } from "@mui/material";
import styled from "styled-components";
import myImage from "../../assets/images/profile-pic.png";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Frame = styled.div`
  position: relative;
  width: 75%;
  height: 40vh;
  border: 20px solid #353e3bff;

  @media (max-width: 414px) {
    /* width: 1980px; */
    margin-bottom: 20vh;
    width: 100%;
    height: 20vh;
    border-width: 10px;
  }

  @media (min-width: 415px) {
    /* width: 1980px; */
    margin-bottom: 20vh;
    width: 100%;
    height: 20vh;
    border-width: 20px;
  }

  @media (min-width: 1025px) {
    /* width: 1980px; */
    margin-bottom: 20vh;
    width: 50%;
    height: 50vh;
    border-width: 20px;
  }

  @media (min-width: 1280px) {
    /* width: 1980px; */
    margin-bottom: initial;
    width: 75%;
    height: 50vh;
    border-width: 20px;
  }

  /* Responsive Height and Width */

  @media (min-width: 415px) and (max-height: 720px) {
    /* width: 1980px; */
    margin-bottom: 20vh;
    width: 100%;
    height: 25vh;
    border-width: 10px;
  }
`;

export const MainGrid = styled(Grid)`
  height: fit-content;
`;  

export const MyImage = styled.div`
  top: 0;
  bottom: 0;
  right: -185px;
  margin: auto;
  position: absolute;
  width: 350px;
  height: 350px;
  background-image: url(${myImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 414px) {
    /* width: 1980px; */
    width: 200px;
    height: 200px;
    left: 0;
    right: 0;
    bottom: -100%;
    
  }

  @media (min-width: 415px) {
    /* width: 1980px; */
    width: 250px;
    height: 250px;
    left: 0;
    right: 0;
    bottom: -100%;
    
  }

  @media (min-width: 1280px) {
    /* width: 1980px; */
    width: 250px;
    height: 250px;
    top: 0;
    right: -100%;
    bottom: 0;
  }

  @media (min-width: 1440px) {
    /* width: 1980px; */
    width: 350px;
    height: 350px;
    top: 0;
    right: -100%;
    bottom: 0;
  }

  @media (min-width: 415px) and (max-height: 720px) {
    /* width: 1980px; */
    width: 200px;
    height: 200px;
    left: 0;
    right: 0;
    bottom: -100%;
  }
`;

export const H2 = styled.h2`
  font-size: 2.7em;
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const H6 = styled.h4`
  font-weight: lighter;
  line-height: 1.5em;
  opacity: 80%;
`;
