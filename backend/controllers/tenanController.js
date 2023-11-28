import Tenan from "../models/tenanModel.js";

export const getAllTenan = async(req, res) => {
    try{
        const response = await Tenan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTenanbyId = async(req, res) => {
    try{
        const response = await Tenan.findOne({
            where:{
                kodetenan: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTenan = async(req, res) => {
    try{
        await Tenan.create(req.body);
        res.status(201).json({msg: "Tenan Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTenan = async(req, res) => {
    try{
        await Tenan.update(req.body,{
            where:{
                kodetenan: req.params.id
            }
        });
        res.status(200).json({msg: "Tenan Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTenan = async(req, res) => {
    try{
        await Tenan.destroy({
            where:{
                kodetenan: req.params.id
            }
        });
        res.status(200).json({msg: "Tenan Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
