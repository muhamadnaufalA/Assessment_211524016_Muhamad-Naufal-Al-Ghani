import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from './navbar';
import { Link } from "react-router-dom";

const KasirList = () => {
const [kasirs, setKasir] = useState([]);

useEffect(()=>{
    getkasirs(); 
}, []);

const getkasirs = async () =>{
    const response = await axios.get('http://localhost:3000/kasir');
    setKasir(response.data);
}

const deleteKasir = async (id) => {
    try{
        await axios.delete(`http://localhost:3000/kasir/${id}`);
        getkasirs();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`addKasir`} className="button is-success">
                    Add New
                </Link>
                <tabel className = "table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>kodekasir</th>
                            <th>nama</th>
                            <th>hp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kasirs.map((kasir) => (
                        <tr key={kasir.kodekasir}>
                            <td>{kasir.kodekasir}</td>
                            <td>{kasir.nama}</td>
                            <td>{kasir.hp}</td>
                            <td>
                                <Link to={`editKasir/${kasir.kodekasir}`} className="button is-small is-info">Edit</Link>
                                <button onClick={()=> deleteKasir(kasir.kodekasir)} className="button is-small is-danger">Delete</button>
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

export default KasirList;
