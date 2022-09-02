import { Component } from "react";
import Grid from "@mui/material/Grid";
import logo from '../../assets/logos/logo.png'
import { MainLogo, ListItem, Ul, MainGrid,SubGrid, MenuIcon } from './Header.style'
import {HiOutlineMenu} from 'react-icons/hi'

class Header extends Component {
  render() {
    let items = [
      "home",
      "about",
      "project",
      "assignment",
      "education",
      "skill",
      "contact me",
    ];
    return (
      <MainGrid container justifyContent="center">
        <SubGrid container xl={10} lg={10} md={10} sm={10} xs={10}>
          <Grid container xl={3} md={3} xs={6} alignItems="center">
            <Grid item><MainLogo src={logo} alt="" /></Grid>
          </Grid>
          <Grid container xl={6} md={6} xs={6} justifyContent="right" alignItems="center">
            <Ul>
              {items.map((item) => {
                return <ListItem>{item}</ListItem>;
              })}
            </Ul>
            <MenuIcon><HiOutlineMenu/></MenuIcon>
          </Grid>
          <Grid item xl={3} md={3} xs={0}></Grid>
        </SubGrid>
      </MainGrid>
    );
  }
}
export default Header;
