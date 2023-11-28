import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddBarang from "./components/formDataBarang" 
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddBarang/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
