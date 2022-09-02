import { Grid } from "@mui/material";
import styled from "styled-components";
import myImage from "../../assets/images/MyImage.png";

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

  @media (max-width: 768px) {
    background-image: none;
    width: initial;
    height: initial;
  }
  
`;

export const ImageGrid = styled(Grid)`
  height: 100%;

  @media (max-width: 768px) {
    height: initial;
    width: initial !important;
  }
`;
