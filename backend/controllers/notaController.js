import Nota from "../models/notaModel.js";

export const createNota = async(req, res) => {
    try{
        await Nota.create(req.body);
        res.status(201).json({msg: "Nota Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getAllNota = async(req, res) => {
    try{
        const response = await Nota.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNota = async(req, res) => {
    try{
        await Nota.update(req.body,{
            where:{
                kodenota: req.params.id
            }
        });
        res.status(200).json({msg: "Nota Updated"});
    } catch (error) {
        console.log(error.message);
    }
}