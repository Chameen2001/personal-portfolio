import { Component } from "react";
import Grid from '@mui/material/Grid';
import {styleSheet} from "./style";
import { withStyles } from "@mui/styles";

class Header extends Component {
    
  render() {
    let items=["home","about","project","assignment","education","skill","contact me"];
    const {classes} = this.props
    return (
      <Grid container justifyContent="center" alignItems="center" className={classes.mainGrid}>
        <Grid item xl={10} md={10} xs={10} className={classes.middleHeader}>
          <Grid container padding="5px">
          <Grid container xl={4} xs={4} alignItems="center" justifyContent="center">
            <Grid item>
                Chameen Logo
            </Grid>
          </Grid>
            <Grid item xl={8} xs={8}>
                <ul className={classes.menu}>
                    {items.map(item=>{
                        return(<li className={classes.menuItem}>{item}</li>);
                    })}
                </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styleSheet) (Header);

