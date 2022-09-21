import styled from "styled-components";

export const CardBlur = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% + 1px);
  background-color: black;
  opacity: 0;
  transition: opacity 0.15s ease-in;
`;

export const Footer = styled.div`
  z-index: 1;
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: 0;
`;

export const Svg = styled.svg`
  z-index: -1;
  position: absolute;
  fill: white;
  left: 0;
  bottom: 0;
  width: 350px;
  height: 250px;
`;

export const Connections = styled.div`
  z-index: 1;
  height: fit-content;
  width: fit-content ;
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  bottom: 100px;
  margin: auto;
`;

export const Info = styled.div`
  color: white;
  font-family: Inconsolata;
  padding-left: 20px;
  transform: translateY(250px);

  transition: transform 1s cubic-bezier(0.31, 1.21, 0.64, 1.02);
`;

export const Name = styled.div`
  font-weight: bolder;
  padding-top: 5px;
`;

export const Job = styled.div`
  margin-top: 10px;
`;

export const Connection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(200px);
  transition: transform 1s cubic-bezier(0.46, 1.48, 0.18, 0.81);
  height: 35px;
  width: 35px;
  padding: 0px;
  border-radius: 100%;
  overflow: hidden;
`;

export const Card = styled.div`
  position: absolute;
  border-radius: 8px;
  height: 250px;
  width: 350px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 80px -10px black;
  overflow: hidden;
  
  :hover ${CardBlur} {
    opacity: 0.6;
  }

  :hover ${Connection} {
    transform: translateY(0px);
  }

  :hover ${Info} {
    transform: translateY(0px);
  }
`;

export const Icon = styled.a`
  font-size: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: red;
  }
`;

export const Rect = styled.rect``;
