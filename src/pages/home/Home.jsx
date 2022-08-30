import { Component, Fragment } from "react";
import Header from "../../components/header/Header";
import HomeBanner from "../../components/homeBanner/HomeBanner";

class Home extends Component{
    render(){
        return(
            <Fragment>
                <HomeBanner/>
            </Fragment>
        );
    }
}

export default Home;