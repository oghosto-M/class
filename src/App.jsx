import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from './Pages/Home/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about"  element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
