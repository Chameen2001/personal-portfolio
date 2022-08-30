import { Component } from "react";
import Grid from "@mui/material/Grid";
import logo from '../../assets/logos/logo.png'
import { LogoContainer,MainLogo,ListItem,Ul, MainGrid } from './Header.style'

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
        <MainGrid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xl={10}
            md={10}
            xs={10}
          >
            <Grid container padding="5px">
              <Grid
                container
                xl={3}
                xs={3}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item><LogoContainer><MainLogo src={logo} alt="" /></LogoContainer></Grid>
              </Grid>
                <Grid container xl={6} xs={6}
                  justifyContent="center"
                  alignItems="center">
                    <Ul>
                      {items.map((item) => {
                        return <ListItem>{item}</ListItem>;
                      })}
                    </Ul>
                </Grid>
              <Grid item xl={3} xs={3}></Grid>
            </Grid>
          </Grid>
        </MainGrid>
    );
  }
}
export default Header;
