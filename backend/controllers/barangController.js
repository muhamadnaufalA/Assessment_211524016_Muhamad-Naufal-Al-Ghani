import Barang from "../models/barangModel.js";

export const getAllBarang = async(req, res) => {
    try{
        const response = await Barang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarang = async(req, res) => {
    try{
        await Barang.create(req.body);
        res.status(201).json({msg: "Barang Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBarang = async(req, res) => {
    try{
        await Barang.update(req.body,{
            where:{
                kodebarang: req.params.id
            }
        });
        res.status(200).json({msg: "Barang Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarang = async(req, res) => {
    try{
        await Barang.destroy({
            where:{
                kodebarang: req.params.id
            }
        });
        res.status(200).json({msg: "Barang Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
