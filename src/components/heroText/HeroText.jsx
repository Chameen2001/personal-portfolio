import { Component } from "react";
import Grid from '@mui/material/Grid';
import { H5, H3, H1, H2, Ul, Li, SocialIconLinks, DownloadCVButton } from "./HeroText.style";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub } from 'react-icons/ai'

class HeroText extends Component {
    render() {
        return (
            <Grid container xs={12}>
                <Grid item xs={12} xl={12}><H3>hey there!</H3></Grid>
                <Grid item xs={12} xl={12}><H1>i am chameen dilhara</H1></Grid>
                <Grid item xs={12} xl={12}><H2>full stack developer</H2></Grid>
                <Grid item xs={12} xl={12}><H5>We’re what new-age banking looks and feels-like. We are Sri Lanka’s first fully-fledged digital banking {<br />} experience powered by Nations Trust Bank & a Mobile Wallet plus Payment System all wrapped up in {<br />} one single lifestyle app packed with loads of awesome features. Welcome to the FriMi life!</H5></Grid>

                <Grid item xs={12} xl={12}>
                    <Ul>
                        <Li><SocialIconLinks href="https://github.com/Chameen2001"><AiOutlineGithub /></SocialIconLinks></Li>
                        <Li><SocialIconLinks href="https://www.facebook.com/chamin.dilhara.5"><AiOutlineFacebook /></SocialIconLinks></Li>
                        <Li><SocialIconLinks href="https://www.instagram.com/thatdilhara/?hl=en"><AiOutlineInstagram /></SocialIconLinks></Li>
                        <Li><SocialIconLinks href="https://www.linkedin.com/in/chamin-dilhara-5594a01ab/"><AiOutlineLinkedin /></SocialIconLinks></Li>
                    </Ul>
                </Grid>
                <Grid item xs={12} xl={12}><DownloadCVButton variant="contained">Download CV</DownloadCVButton></Grid>
            </Grid>
        );
    }
}
export default HeroText;