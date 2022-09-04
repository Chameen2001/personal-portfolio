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
        <ListItem style={{ color: " #7462df" }}>Home</ListItem>,
        <ListItem>about</ListItem>,
        <ListItem>project</ListItem>,
        <ListItem>assignment</ListItem>,
        <ListItem>education</ListItem>,
        <ListItem>skill</ListItem>,
        <ListItem>contact me</ListItem>,
      ],
      color: { backgroundColor: "transparent" }
    }
  }

  changeActiveMenu = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 530) {
      let items = this.state.items;
      items[0] = <ListItem >Home</ListItem>;
      items[1] = <ListItem style={{ color: " #7462df" }}>about</ListItem>;
      this.setState({
        items
      })
    }
    if (window.scrollY <= 1) {
      let items = this.state.items;
      items[0] = <ListItem style={{ color: " #7462df" }}>Home</ListItem>;
      items[1] = <ListItem>about</ListItem>;
      this.setState({
        items
      })
    }
  }

  changeHeaderColor = () => {

    if (window.scrollY < 126) {
      this.setState({
        color: { backgroundColor: "transparent" }
      })
    }

    if (window.scrollY > 126) {
      this.setState({
        color: { backgroundColor: "#d2dae2" }
      })
    }
  }

  render() {

    window.addEventListener('scroll', this.changeActiveMenu);
    window.addEventListener('scroll', this.changeHeaderColor);



    return (
      <MainGrid container justifyContent="center" style={this.state.color}>
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
      </MainGrid >
    );
  }
}
export default Header;
