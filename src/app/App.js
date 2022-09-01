import { Fragment } from "react";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import { HomeBannerArea, Wrapper } from "./App.style";

function App() {
  return (
    <Fragment>
      <HomeBannerArea>
        <Wrapper>
          <Header/>
          <Home/>
        </Wrapper>
      </HomeBannerArea>
      
    </Fragment>
  );
}

export default App;
