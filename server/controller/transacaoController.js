const { Transacao } = require("../models");

const TransacaoController = {
    getAll(req, res){
        try{
            Transacao.findAll().then((itens) => {
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
            Transacao.findByPk(id).then((itens) => {
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
            const {email, senha, token} = req.body;
            Transacao.create({email, senha, token}).then(() => {
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
            Transacao.destroy({
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
            const {email, senha, token} = req.body;

            Transacao.update(
                {email, senha, token},
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

module.exports = { TransacaoController };