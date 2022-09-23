import { Grid } from "@mui/material";
import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const MainGrid = styled(Grid)`
  height: fit-content;
  background-color: aqua;
`;

export const MainTitleGrid = styled(Grid)`
height: 10em;
`;

export const H2 = styled.h2`
  font-size: 2em;
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const H5 = styled.h5`
  text-transform: capitalize;
  line-height: 1.5em;
  color: white;
  font-weight: 500;
  opacity: 50%;
`;

export const H4 = styled.h4`
  text-transform: uppercase;
  color: #9FB9B6;
  line-height: 1.5em;
  font-weight: 500;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  color: #9fb9b6ff;
  font-weight: lighter;
`;