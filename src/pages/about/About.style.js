import { Grid } from "@mui/material";
import styled from "styled-components";
import myImage from "../../assets/images/profile-pic.png";

export const Frame = styled.div`
  position: relative;
  width: 80%;
  height: 60%;
  border: 20px solid #7462df;
`;

export const MainGrid = styled(Grid)`
  height: 100vh;
`;

export const MyImage = styled.div`
  top: 0;
  bottom: 0;
  right: -160px;
  margin: auto;
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: url(${myImage});
  background-size: cover;
  background-position: center;
`;

export const H2 = styled.h2`
  font-size: 2.7em;
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const H6 = styled.h4`
  font-weight: lighter;
  line-height: 1.5em;
`;
