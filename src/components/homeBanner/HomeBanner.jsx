import { Component } from "react";
import Grid from '@mui/material/Grid';
import HeroText from "../heroText/HeroText";
import { HomeBannerArea, MainBanner } from "./homeBanner.style";



class HomeBanner extends Component{
   
    render(){
        return(
            <HomeBannerArea>
            <MainBanner container justifyContent="center">
                <Grid container xl={8} alignItems="center">
                <Grid xl={6} container>
                    <HeroText/>
                </Grid>
                <Grid item xl={6}>
                    <img src="" alt="" />
                </Grid>
                </Grid>
            </MainBanner>
            </HomeBannerArea>
        );
    }
    
}

export default HomeBanner