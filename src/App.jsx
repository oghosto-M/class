import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about"></Route>
        <Route path="/login"></Route>
      </Routes>
    </>
  );
}

export default App;
