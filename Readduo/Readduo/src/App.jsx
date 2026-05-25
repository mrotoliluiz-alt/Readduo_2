import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/home";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";
import Salvos from "./pages/Salvos";



function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Salvos" element={<Salvos />} />
    </Routes>
    
  )
}

export default App