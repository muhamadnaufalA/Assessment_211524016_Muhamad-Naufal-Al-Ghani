import React,{useState} from 'react';
import axios from "axios";
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const AddTenan = () => {
  const [kodeTenan, setKodeTenan] = useState("");
  const [namaTenan, setNamaTenan] = useState("");
  const [hpTenan, setHpTenan] = useState("");

  const navigate = useNavigate();

  const inputTenan = async (e) =>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:3000/tenan', {
            kodetenan : kodeTenan,
            namatenan : namaTenan,
            hp : hpTenan,
        });
        navigate("/listTenan");
    }catch (error){
        console.log(error);
    }
  }

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={inputTenan}>
                    <div className="field">
                        <label className="label">Kode Tenan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={kodeTenan} 
                            onChange={(e)=> setKodeTenan(e.target.value)}
                            placeholder='KodeTenan'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama Kasir</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={namaTenan} 
                            onChange={(e)=> setNamaTenan(e.target.value)}
                            placeholder='NamaTenan'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">HP Kasir</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={hpTenan} 
                            onChange={(e)=> setHpTenan(e.target.value)}
                            placeholder='hpTenan'/>
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

export default AddTenan
