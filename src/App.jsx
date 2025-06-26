import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Profile } from "./views/Profile";
import { NavBar } from "./components/NavBar/NavBar";
import Authentication from "./components/Authentication/Authentication";
import './App.css'
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
