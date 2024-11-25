import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from './components/Footer/Footer'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Home />
      <Footer/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/' Component={Footer} />
        <Route path="/about"></Route>
        <Route path="/login"></Route>
      </Routes>
    </>
  );
}

export default App;
