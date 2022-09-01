import { Component } from "react";
import Grid from "@mui/material/Grid";
import logo from '../../assets/logos/logo.png'
import { MainLogo,ListItem,Ul, MainGrid } from './Header.style'

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
        <MainGrid container>
            <Grid container xl={3} xs={2} alignItems="center">
                <Grid item><MainLogo src={logo} alt="" /></Grid>
              </Grid>
              <Grid container xl={6} xs={8}>
                    <Ul>
                      {items.map((item) => {
                        return <ListItem>{item}</ListItem>;
                      })}
                    </Ul>
              </Grid>
              <Grid item xl={3} xs={2}></Grid>
        </MainGrid>
    );
  }
}
export default Header;
