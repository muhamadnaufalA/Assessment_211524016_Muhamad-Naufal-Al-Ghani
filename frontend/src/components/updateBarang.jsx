import React,{useState, useEffect} from 'react';
import axios from "axios";
import Navbar from './navbar';
import { useNavigate, useParams} from 'react-router-dom';

const EditBarang = () => {
    const [kodeBarang, setKodeBarang] = useState("");
    const [namaBarang, setNamaBarang] = useState("");
    const [satuan, setSatuan] = useState("");
    const [hargaSatuan, setHargaSatuan] = useState("");
    const [stok, setSok] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

  useEffect(() => {
    getBarangById();
  }, []);

  const UpdateBarang = async (e) =>{
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:3000/barang/${id}`, {
            kodebarang : kodeBarang,
            namabarang : namaBarang,
            satuan : satuan,
            hargasatuan : parseInt(hargaSatuan),
            stok : parseInt(stok)
        });
        navigate("/");
    }catch (error){
        console.log(error);
    }
  };

  const getBarangById = async () => {
    const response = await axios.get(`http://localhost:3000/barang/${id}`);
    setKodeBarang(response.data.kodebarang);
    setNamaBarang(response.data.namabarang);
    setSatuan(response.data.satuan);
    setHargaSatuan(response.data.hargasatuan);
    setSok(response.data.stok);
  }

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={UpdateBarang}>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditBarang;
