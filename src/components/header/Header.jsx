import { Component } from "react";
import Grid from "@mui/material/Grid";
import logo from '../../assets/logos/logo.png'
import { MainLogo, ListItem, Ul, MainGrid, SubGrid, MenuIcon } from './Header.style'
import { HiOutlineMenu } from 'react-icons/hi'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        <ListItem style={{ color: " #efb7e0" }}>Home</ListItem>,
        <ListItem>about</ListItem>,
        <ListItem>project</ListItem>,
        <ListItem>assignment</ListItem>,
        <ListItem>education</ListItem>,
        <ListItem>skill</ListItem>,
        <ListItem>contact me</ListItem>,
      ]
    }
  }

  changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 530) {
      let items = this.state.items;
      items[0] = <ListItem >Home</ListItem>;
      items[1] = <ListItem style={{ color: " #efb7e0" }}>about</ListItem>;
      this.setState({
        items
      })
    }
    if (window.scrollY <= 1) {
      let items = this.state.items;
      items[0] = <ListItem style={{ color: " #efb7e0" }}>Home</ListItem>;
      items[1] = <ListItem>about</ListItem>;
      this.setState({
        items
      })
    }
  }

  render() {

    window.addEventListener('scroll', this.changeBackground);



    return (
      <MainGrid container justifyContent="center">
        <SubGrid container xl={10} lg={10} md={10} sm={10} xs={10}>
          <Grid container xl={3} md={3} xs={6} alignItems="center">
            <Grid item><MainLogo src={logo} alt="" /></Grid>
          </Grid>
          <Grid container xl={6} md={6} xs={6} justifyContent="right" alignItems="center">
            <Ul>
              {
                this.state.items.map((item) => {
                  return item;
                })
              }
            </Ul>
            <MenuIcon><HiOutlineMenu /></MenuIcon>
          </Grid>
          <Grid item xl={3} md={3} xs={0}></Grid>
        </SubGrid>
      </MainGrid>
    );
  }
}
export default Header;
