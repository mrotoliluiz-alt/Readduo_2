import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
    </Routes>
    
  )
}

export default App