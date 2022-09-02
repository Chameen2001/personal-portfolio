import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const MainGrid = styled(Grid)`
     position: absolute;
     height: 10vh;
     @media (max-width: 900px) {
    box-shadow: 0px 10px 10px -10px;
  }
`
export const SubGrid = styled(Grid)`
  
`

export const Ul=styled.ul`
    width: 100%;
    list-style: none;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.83em;
    font-weight: bold;
    padding: 0;

    @media (max-width: 900px) {
    display: none;
  }
    
`

export const ListItem=styled.li`
    text-transform: uppercase;
    font-family: "Roboto";
    color: #275064;
    transition: all 1000ms;
    :hover{
        color: #efb7e0;
        cursor: pointer;
        transition: all 400ms;
    }
`

export const MainLogo=styled.img`
   width: 9em;
`

export const MenuIcon  = styled.a`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: black;
  transform: rotate(0deg);
  transition: all 500ms;

  @media (max-width: 768px) {
    display: flex;
  }
`;