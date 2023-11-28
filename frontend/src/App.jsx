import {BrowserRouter, Routes, Route} from "react-router-dom"

import EditBarang from "./components/updateBarang" 
import AddBarang from "./components/formDataBarang" 
import BarangList from "./components/listBarang"

import KasirList from "./components/listKasir"
import AddKasir from "./components/formDataKasir" 
import UpdateKasir from "./components/updateKasir"

import TenanList from "./components/listTenan"
import AddTenan from "./components/formDataTenan"

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarangList/>}/>
        <Route path="/addBarang" element={<AddBarang/>}/>
        <Route path="/editBarang/:id" element={<EditBarang/>}/>
        <Route path="/listKasir" element={<KasirList/>}/>
        <Route path="/listKasir/addKasir" element={<AddKasir/>}/>
        <Route path="/listKasir/editKasir/:id" element={<UpdateKasir/>}/>
        <Route path="/listTenan" element={<TenanList/>}/>
        <Route path="/listTenan/addTenan" element={<AddTenan/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
