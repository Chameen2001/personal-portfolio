import { Grid } from "@mui/material";
import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
`;

export const MainGrid = styled(Grid)`
  height: fit-content;
`;

export const MainTitleGrid = styled(Grid)`
height: 10em;
`;

export const BoxTitle = styled(Grid)`
  margin-bottom: 3em !important;
`;

export const Box = styled.div`
  box-shadow: 2px 2px 5px 1px;
  padding-top: 3em;
  width: 40em;
  height: 30em;
  border-radius: 20px;
  background-color: #353e3bff;
  transition: all 1000ms;

  :hover{
    transform: scale(1.05);
    transition: all 1000ms;
  }
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

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export const Li = styled.li`
  margin-right: 2em;
`;

export const Icon = styled.a`
  color: #c49754ff;
  font-size: 1.5em;
`;

export const Level = styled.div`
  padding-left: 3em;
`;

export const ExRow = styled(Grid)`
margin-bottom: 2em !important;
`;
