import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import { Apps } from "./App.style";

function App() {
  return (
    <Apps>
      <Header/>
      <Home />
    </Apps>
  );
}

export default App;
