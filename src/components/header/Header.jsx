import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import logo from '../../assets/logos/logo.png'
import { MainLogo, ListItem, Ul, MainGrid, SubGrid, MenuIcon } from './Header.style'
import { HiOutlineMenu } from 'react-icons/hi'

export default function Header() {

  const [items, setItems] = useState([
    <ListItem style={{ color: " #9fb9b6ff" }}>Home</ListItem>,
    <ListItem>about</ListItem>,
    <ListItem>project</ListItem>,
    <ListItem>assignment</ListItem>,
    <ListItem>education</ListItem>,
    <ListItem>skill</ListItem>,
    <ListItem>contact me</ListItem>,
  ]);

  const [color, setColor] = useState({ backgroundColor: "transparent" });

  const changeActiveMenu = () => {
    if (window.scrollY >= 530) {
      let copyItems = items;
      copyItems[0] = <ListItem >Home</ListItem>;
      copyItems[1] = <ListItem style={{ color: " #9fb9b6ff" }}>about</ListItem>;
      setItems(copyItems);
    }
    if (window.scrollY <= 1) {
      let copyItems = items;
      copyItems[0] = <ListItem style={{ color: " #9fb9b6ff" }}>Home</ListItem>;
      copyItems[1] = <ListItem>about</ListItem>;
      setItems(copyItems);
    }
  }

  const changeHeaderColor = () => {

    if (window.scrollY < 126) {
      setColor({ backgroundColor: "transparent" });
    }

    if (window.scrollY > 126) {
      setColor({ backgroundColor: "white" });
    }
  }

  window.addEventListener('scroll', changeActiveMenu);
  window.addEventListener('scroll', changeHeaderColor);

  return (
    <MainGrid container justifyContent="center" style={color}>
      <SubGrid container xl={10} lg={10} md={10} sm={10} xs={10}>
        <Grid container xl={3} md={3} xs={6} alignItems="center">
          <Grid item><MainLogo src={logo} alt="" /></Grid>
        </Grid>
        <Grid container xl={6} md={6} xs={6} justifyContent="right" alignItems="center">
          <Ul>
            {
              items.map((item) => {
                return (item);
              })
            }
          </Ul>
          <MenuIcon><HiOutlineMenu /></MenuIcon>
        </Grid>
        <Grid item xl={3} md={3} xs={0}></Grid>
      </SubGrid>
    </MainGrid >
  )
}
