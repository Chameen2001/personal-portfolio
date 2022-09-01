import { Component } from "react";
import Grid from '@mui/material/Grid';
import HeroText from "../heroText/HeroText";
import { MainBanner, MyImage} from "./homeBanner.style";


class HomeBanner extends Component {

    render() {
        return (
            
                <MainBanner container xl={12} md={12} xs={12} alignItems="center">
                    <Grid xl={7} md={7} xs={12} container>
                        <HeroText />
                    </Grid>
                    <Grid container xl={5} md={5} xs={0} justifyContent="center" alignItems="flex-end" style={{ height: "100%" }}>
                        <MyImage />
                    </Grid>
                </MainBanner>
            
        );
    }

}

export default HomeBanner