import styled from "styled-components";
import backImg from "../assets/images/Background.png";

export const Wrapper = styled.div`
  position: absolute;
  font-family: "Roboto";
  color: #275064;

  height: 100%;

  @media (max-width: 2560px) {
    /* width: 1980px; */
    font-size: 25px;
  }

  @media (max-width: 2400px) {
    /* width: 1980px; */
    font-size: 22px;
  }

  @media (max-width: 2050px) {
    /* width: 1980px; */
    font-size: 20px;
  }

  @media (max-width: 1980px) {
    /* width: 1440px; */
    font-size: 17px;
  }

  @media (max-width: 1440px) {
    /* width: 1100px; */
    font-size: 13px;
  }

  @media (max-width: 1024px) {
    /* width: 860px; */
    font-size: 13px;
  }

  @media (max-width: 768px) {
    /* width: 650px; */
    font-size: 13px;
  }

  @media (max-width: 425px) {
    /* width: 650px; */
    font-size: 10px;
  }
  @media (max-width: 375px) {
    /* width: 650px; */
    font-size: 8px;
  }

  @media (max-width: 320px) {
    /* width: 650px; */
    font-size: 7px;
  }
`;

export const HomeBannerArea = styled.section`
  background-image: url(${backImg});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
