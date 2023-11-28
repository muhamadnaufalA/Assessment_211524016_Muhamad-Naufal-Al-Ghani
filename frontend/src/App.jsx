import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddBarang from "./components/formDataBarang" 
import BarangList from "./components/listBarang"

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<BarangList/>}/>
        <Route path="/addBarang" element={<AddBarang/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
