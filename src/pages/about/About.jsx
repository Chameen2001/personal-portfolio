import { Grid } from "@mui/material";
import { Frame, H2, H6, MainGrid, MyImage } from "./About.style";

const { Component, Fragment } = require("react");

class About extends Component {
    render() {
        return (
            <Fragment>
                <MainGrid container justifyContent="center">
                    <Grid container xl={10} lg={10} md={10} sm={10} xs={10} justifyContent="space-between">
                        <Grid container xl={4} lg={4} md={4} alignItems="center">
                            <Frame>
                                <MyImage />
                            </Frame>
                        </Grid>
                        <Grid container xl={6} lg={6} md={6} justifyContent="space-around" alignItems="center">
                            <Grid item>
                                <H2>about me</H2>
                                <H6>Podcasting operational change management inside of workflows to establish a framework. {<br />}Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</H6>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainGrid >
            </Fragment >
        );
    }
}

export default About;