import React,{useState} from 'react';
import axios from "axios";
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const AddBarang = () => {
  const [kodeBarang, setKodeBarang] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [satuan, setSatuan] = useState("");
  const [hargaSatuan, setHargaSatuan] = useState("");
  const [stok, setSok] = useState("");

  const navigate = useNavigate();

  const inputBarang = async (e) =>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:3000/barang', {
            kodebarang : kodeBarang,
            namabarang : namaBarang,
            satuan : parseInt(satuan),
            hargasatuan : parseFloat(hargaSatuan),
            stok : parseInt(stok)
        });
        // navigate("/");
    }catch (error){
        console.log(error);
    }
  }

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={inputBarang}>
                    <div className="field">
                        <label className="label">Kode Barang</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={kodeBarang} 
                            onChange={(e)=> setKodeBarang(e.target.value)}
                            placeholder='KodeBarang'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama Barang</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={namaBarang} 
                            onChange={(e)=> setNamaBarang(e.target.value)}
                            placeholder='NamaBarang'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Satuan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={satuan} 
                            onChange={(e)=> setSatuan(e.target.value)}
                            placeholder='Satuan'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Harga Satuan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"                         
                            value={hargaSatuan} 
                            onChange={(e)=> setHargaSatuan(e.target.value)}
                            placeholder='HargaSatuan'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Stok</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"                         
                            value={stok} 
                            onChange={(e)=> setSok(e.target.value)}
                            placeholder='Stok'/>
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

export default AddBarang
