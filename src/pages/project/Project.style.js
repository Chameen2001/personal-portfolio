import { Grid } from "@mui/material";
import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
`;

export const MainTitleGrid = styled(Grid)`
  height: 10em;
`;

export const MainGrid = styled(Grid)`
  height: fit-content;
`;

export const H2 = styled.h2`
  font-size: 2em;
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const H4 = styled.h4`
  text-transform: uppercase;
  line-height: 1.5em;
  font-weight: 500;
`;

export const ProjectCard = styled.div`
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 20px;
  width: 21em;
  height: 15em;
  overflow: hidden;
`;


export const ProjectRow = styled(Grid)`
  margin-bottom: 2em !important;
`;
