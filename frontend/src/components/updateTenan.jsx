import React,{useState, useEffect} from 'react';
import axios from "axios";
import Navbar from './navbar';
import { useNavigate, useParams} from 'react-router-dom';

const UpdateTenan = () => {
  const [kodeTenan, setKodeTenan] = useState("");
  const [namaTenan, setNamaTenan] = useState("");
  const [hpTenan, setHpTenan] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getTenanById();
  }, []);

  const formUpdateTenan = async (e) =>{
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:3000/tenan/${id}`, {
            kodetenan : kodeTenan,
            namatenan : namaTenan,
            hp : hpTenan,
        });
        navigate("/listTenan");
    }catch (error){
        console.log(error);
    }
  }

  const getTenanById = async () => {
    const response = await axios.get(`http://localhost:3000/tenan/${id}`);
    setKodeTenan(response.data.kodetenan);
    setNamaTenan(response.data.namatenan);
    setHpTenan(response.data.hp);
  }

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={formUpdateTenan}>
                    <div className="field">
                        <label className="label">Kode Tenan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={kodeTenan} 
                            onChange={(e)=> setKodeTenan(e.target.value)}
                            placeholder='KodeBarang'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama Tenan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={namaTenan} 
                            onChange={(e)=> setNamaTenan(e.target.value)}
                            placeholder='NamaBarang'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">HP Tenan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={hpTenan} 
                            onChange={(e)=> setHpTenan(e.target.value)}
                            placeholder='Satuan'/>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateTenan
