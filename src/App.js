import TopBar from "./Component/NavigationBar/TopBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Skill from "./Component/Skill";
import Portfolio from "./Component/Portfolio";

function App() {
  return (
    <>
      <TopBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </TopBar>
    </>
  );
}

export default App;
