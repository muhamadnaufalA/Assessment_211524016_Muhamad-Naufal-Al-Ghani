import React,{useState, useEffect} from 'react';
import axios from "axios";
import Navbar from './navbar';
import { useNavigate, useParams} from 'react-router-dom';

const UpdateKasir = () => {
  const [kodeKasir, setKodeKasir] = useState("");
  const [namaKasir, setNamaKasir] = useState("");
  const [hpKasir, setHpKasir] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getKasirById();
  }, []);

  const formUpdateKasir = async (e) =>{
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:3000/kasir/${id}`, {
            kodekasir : kodeKasir,
            nama : namaKasir,
            hp : hpKasir,
        });
        navigate("/listKasir");
    }catch (error){
        console.log(error);
    }
  }

  const getKasirById = async () => {
    const response = await axios.get(`http://localhost:3000/kasir/${id}`);
    setKodeKasir(response.data.kodekasir);
    setNamaKasir(response.data.nama);
    setHpKasir(response.data.hp);
  }

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={formUpdateKasir}>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateKasir
