
import styled from "styled-components";

export const DownloadCVButton = styled.button`
    border: none;
    width: 10em;
    height: 3em;
    border-radius: 5px;
    background-color: #8e81db;
    transition: all 400ms;
    margin: 1.5rem 0 0 0;
    font-family: Roboto;
    text-transform: uppercase;
    font-size: 0.8em;
    color: white;

    :hover{
        background-color: #7462df;
        transition: all 400ms;
        cursor: pointer;
    }
`


export const SocialIconLinks = styled.a`
    font-size: 1.5em;
    color: #86a7b8;
   :hover{
    color: #2980b9;
    transition: all 300ms;
   }
`

export const H3 = styled.h3`
    text-transform: uppercase;
    color: #7e7e7e;
    font-weight: lighter;
`

export const H2 = styled.h2`
    text-transform: uppercase;
    font-weight: lighter;
`

export const H1 = styled.h1`
    text-transform: uppercase;
    font-size: 4em;
    line-height: 1.5em;
    color: #0d374d;
`

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 3em 0 0 0;
`

export const Li = styled.li`
    display: inline-block;
    margin: 0 1em 0 0;
`