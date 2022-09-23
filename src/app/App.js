import Header from "../components/header/Header";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import { HomeBannerArea, Wrapper } from "./App.style";
import { ScrollContainer } from "react-scroll-motion";
// import Project from "../pages/project/Project";
// import MyExperience from "../pages/my-experience/MyExperience";
// import Education from "../pages/education/Education";

function App() {
  return (
    <ScrollContainer>
      <Wrapper>
        <HomeBannerArea>
          <Header />
          <Home />
        </HomeBannerArea>
        <About />
        {/* <MyExperience />
        <Project />
        <Education /> */}
      </Wrapper>
    </ScrollContainer>
  );
}

export default App;
