import { Fragment } from "react";
import Header from "../components/header/Header";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import { HomeBannerArea, Wrapper } from "./App.style";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Project from "../pages/project/Project";
import MyExperience from "../pages/my-experience/MyExperience";

function App() {
  return (
    <ScrollContainer>
      <Fragment>
        <HomeBannerArea>
          <Wrapper>
            <Header />
            <Home />
            <About />
            <MyExperience />
            <Project />
          </Wrapper>
        </HomeBannerArea>
      </Fragment>
    </ScrollContainer>
  );
}

export default App;
