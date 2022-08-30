import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const MainGrid = styled(Grid)`
     height: 15vh;
     position: absolute;
`
export const Menu=styled.menu`
    width: 100%;
    list-style: none;
    display: inline-flex;
    justify-content: space-evenly;
    font-size: 0.75rem;
    padding: 0;
`

export const LogoContainer=styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`
export const Ul=styled.ul`
    width: 100%;
    list-style: none;
    display: inline-flex;
    justify-content: space-evenly;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0;
`

export const ListItem=styled.li`
    text-transform: uppercase;
    font-family: "Roboto";
    color: #275064;

    :hover{
        color: #efb7e0;
        cursor: pointer;
    }
`

export const MainLogo=styled.img`
   width: 100px;
`