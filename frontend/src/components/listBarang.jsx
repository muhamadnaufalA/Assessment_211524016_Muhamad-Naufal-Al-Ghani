import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from './navbar';
import { Link } from "react-router-dom";

const BarangList = () => {
const [barangs, setBarang] = useState([]);

useEffect(()=>{
    getBarangs(); 
}, []);

const getBarangs = async () =>{
    const response = await axios.get('http://localhost:3000/barang');
    setBarang(response.data);
}

const deleteUser = async (id) => {
    try{
        await axios.delete(`http://localhost:3000/barang/${id}`);
        getBarangs();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`addBarang`} className="button is-success">
                    Add New
                </Link>
                <tabel className = "table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>kodebarang</th>
                            <th>namabarang</th>
                            <th>satuan</th>
                            <th>hargasatuan</th>
                            <th>stok</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {barangs.map((barang) => (
                        <tr key={barang.kodebarang}>
                            <td>{barang.kodebarang}</td>
                            <td>{barang.namabarang}</td>
                            <td>{barang.satuan}</td>
                            <td>{barang.hargasatuan}</td>
                            <td>{barang.stok}</td>
                            <td>
                                <Link to={`edit/${barang.kodebarang}`} className="button is-small is-info">Edit</Link>
                                <button onClick={()=> deleteUser(barang.kodebarang)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </tabel>
            </div>
        </div>
    </div>
  )
}

export default BarangList;
