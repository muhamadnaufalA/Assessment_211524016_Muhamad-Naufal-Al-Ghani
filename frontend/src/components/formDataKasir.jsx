import React,{useState} from 'react';
import axios from "axios";
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const AddKasir = () => {
  const [kodeKasir, setKodeKasir] = useState("");
  const [namaKasir, setNamaKasir] = useState("");
  const [hpKasir, setHpKasir] = useState("");

  const navigate = useNavigate();

  const inputKasir = async (e) =>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:3000/kasir', {
            kodekasir : kodeKasir,
            nama : namaKasir,
            hp : hpKasir,
        });
        navigate("/listKasir");
    }catch (error){
        console.log(error);
    }
  }

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={inputKasir}>
                    <div className="field">
                        <label className="label">Kode Kasir</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={kodeKasir} 
                            onChange={(e)=> setKodeKasir(e.target.value)}
                            placeholder='KodeBarang'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama Kasir</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={namaKasir} 
                            onChange={(e)=> setNamaKasir(e.target.value)}
                            placeholder='NamaBarang'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">HP Kasir</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={hpKasir} 
                            onChange={(e)=> setHpKasir(e.target.value)}
                            placeholder='Satuan'/>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddKasir
