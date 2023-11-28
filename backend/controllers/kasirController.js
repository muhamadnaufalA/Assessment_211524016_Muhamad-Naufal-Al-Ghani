import Kasir from "../models/kasirModel.js";

export const getAllKasir = async(req, res) => {
    try{
        const response = await Kasir.findAll({
            order: [['kodekasir', 'ASC']], // Change 'ASC' to 'DESC' if you want descending order
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKasirbyId = async(req, res) => {
    try{
        const response = await Kasir.findOne({
            where:{
                kodekasir: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKasir = async(req, res) => {
    try{
        await Kasir.create(req.body);
        res.status(201).json({msg: "Kasir Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKasir = async(req, res) => {
    try{
        await Kasir.update(req.body,{
            where:{
                kodekasir: req.params.id
            }
        });
        res.status(200).json({msg: "Kasir Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKasir = async(req, res) => {
    try{
        await Kasir.destroy({
            where:{
                kodekasir: req.params.id
            }
        });
        res.status(200).json({msg: "Kasir Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}


