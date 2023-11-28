import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from './navbar';
import { Link } from "react-router-dom";

const TenanList = () => {
const [tenans, setTenan] = useState([]);

useEffect(()=>{
    getTenans(); 
}, []);

const getTenans = async () =>{
    const response = await axios.get('http://localhost:3000/tenan');
    setTenan(response.data);
}

const deleteTenan = async (id) => {
    try{
        await axios.delete(`http://localhost:3000/tenan/${id}`);
        getTenans();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="container">
        <Navbar />
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`addTenan`} className="button is-success">
                    Add New
                </Link>
                <tabel className = "table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>kodetenan</th>
                            <th>namatenan</th>
                            <th>hp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenans.map((tenan) => (
                        <tr key={tenan.kodetenan}>
                            <td>{tenan.kodetenan}</td>
                            <td>{tenan.namatenan}</td>
                            <td>{tenan.hp}</td>
                            <td>
                                <Link to={`editKasir/${tenan.kodetenan}`} className="button is-small is-info">Edit</Link>
                                <button onClick={()=> deleteTenan(tenan.kodetenan)} className="button is-small is-danger">Delete</button>
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

export default TenanList;
