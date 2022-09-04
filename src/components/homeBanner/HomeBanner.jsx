import { Component } from "react";
import Grid from "@mui/material/Grid";
import HeroText from "../heroText/HeroText";
import { MainBanner, MyImage, ImageGrid, SubBanner } from "./homeBanner.style";
import AOS from "aos";
import 'aos/dist/aos.css'
class HomeBanner extends Component {

    componentDidMount() {
        AOS.init({ duration: 1500 });
    }

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
                    <Grid xl={7} lg={7} md={7} sm={12} container data-aos="fade-up">
                        < HeroText />
                    </Grid>
                    <ImageGrid
                        container
                        xl={5}
                        lg={5}
                        md={5}
                        sm={0}
                        justifyContent="center"
                        alignItems="flex-end"
                        data-aos="fade-down"
                    >
                        <MyImage />
                    </ImageGrid>
                </SubBanner>
            </MainBanner>
        );
    }
}

export default HomeBanner;
