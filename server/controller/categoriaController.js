const { Categoria } = require("../models");

const CategoriaController = {
    getAll(req, res){
        try{
            Categoria.findAll().then((itens) => {
                res.status(200).json(itens);
            }).catch((e)=>{
                res.status(500).json({'error': e.message});
            })
        }catch(e){
            res.status(500).json({'error': e.message});
        }
    },

    getId(req, res){
        try{
            const id = Number(req.params.id);
            Categoria.findByPk(id).then((itens) => {
                res.status(200).json(itens);
            }).catch((e)=>{
                res.status(500).json({'error': e.message});
            })
        }catch(e){
            res.status(500).json({'error': e.message});
        }
    },

    post(req, res){
        try {
            const {descricao, tipo_categria} = req.body;
            Categoria.create({descricao, tipo_categria}).then(() => {
                res.status(201).json({message: "Cadastrado com sucesso!"});
            }).catch((e) =>{
                res.status(500).json({'error': e.message});                        
            });
        } catch (e) {
            res.status(500).json({'error': e.message});            
        }
    },

    delete(req, res){
        try {
            Categoria.destroy({
                where:{codigo: Number(req.params.id)}
            }).then(() => {
                res.status(200).json({message: "Deletado com sucesso!"});
            }).catch((e) =>{
                res.status(500).json({'error': e.message});                        
            });   
        } catch (e) {
            res.status(500).json({'error': e.message});                        
        }
    },

    put(req, res){
        try {
            const {descricao, tipo_categria} = req.body;

            Categoria.update(
                {descricao, tipo_categria},
                {
                    where:{ codigo: req.params.id }
                }
            ).then(() => {
                res.status(200).json({message: "Atualizado com sucesso!"});
            }).catch((e) =>{
                res.status(500).json({'error': e.message});                        
            })      
        } catch (e) {
            res.status(500).json({'error': e.message});                        
        }
    }
}

module.exports = { CategoriaController };