import { Grid } from "@mui/material";
import styled from "styled-components";

export const MainGrid = styled(Grid)`
  height: 100vh;
`;

export const BoxTitle = styled(Grid)`
  margin-bottom: 3em !important;
`;

export const Box = styled.div`
  padding-top: 3em;
  width: 40em;
  height: 30em;
  border-radius: 20px;
  background-color: #313275;
`;

export const H2 = styled.h2`
  font-size: 2.7em;
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
  line-height: 1.5em;
  color: white;
  font-weight: 500;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  color: #69a5dc;
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
  color: #69a5dc;
  font-size: 1.5em;
`;

export const Level = styled.div`
  padding-left: 3em;
`;

export const ExRow = styled(Grid)`
margin-bottom: 2em !important;
`;
