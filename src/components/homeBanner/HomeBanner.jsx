import { Component } from "react";
import Grid from "@mui/material/Grid";
import HeroText from "../heroText/HeroText";
import { MainBanner, MyImage, ImageGrid, SubBanner } from "./homeBanner.style";

class HomeBanner extends Component {
    render() {
        return (
            <MainBanner container justifyContent="center">
                <SubBanner
                    container
                    xl={10}
                    lg={10}
                    md={10}
                    sm={10}
                    xs={10}
                    alignItems="center"
                >
                    <Grid xl={7} lg={7} md={7} sm={12} container>
                        <HeroText />
                    </Grid>
                    <ImageGrid
                        container
                        xl={5}
                        lg={5}
                        md={5}
                        sm={0}
                        justifyContent="center"
                        alignItems="flex-end"
                    >
                        <MyImage />
                    </ImageGrid>
                </SubBanner>
            </MainBanner>
        );
    }
}

export default HomeBanner;
