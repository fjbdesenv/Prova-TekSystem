const { Op } = require("sequelize");
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

    getAno(req, res){
        try{
            const ano = Number(req.params.ano);
            Transacao.findAll({
                where:{
                    date:{
                        [Op.between]: [new Date(`01/01/${ano}`), new Date(`12/31/${ano}`)]
                    }
                }
            }).then((itens) => {
                res.status(200).json(itens);
            }).catch((e)=>{
                res.status(500).json({'error': e.message});
            })
        }catch(e){
            res.status(500).json({'error': e.message});
        }
    },

    getAnoMes(req, res){
        try{
            const ano = Number(req.params.ano);
            const mes = Number(req.params.mes);
            Transacao.findAll({
                where:{
                    date:{
                        [Op.between]: [new Date(`01/${mes}/${ano}`), new Date(`${mes}/31/${ano}`)]
                    }
                }
            }).then((itens) => {
                res.status(200).json(itens);
            }).catch((e)=>{
                res.status(500).json({'error': e.message});
            })
        }catch(e){
            res.status(500).json({'error': e.message});
        }
    },
    
    getAnoMesValor(req, res){
        try{

            const ano = Number(req.params.ano);
            const mes = Number(req.params.mes);
            const min = Number(req.params.min);
            const max = Number(req.params.max);

            Transacao.findAll({
                where:{
                    date:{
                        [Op.between]: [new Date(`01/${mes}/${ano}`), new Date(`${mes}/31/${ano}`)]
                    },
                    valor:{
                        [Op.between]: [min, max]
                    }
                }
            }).then((itens) => {
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
            const {valor, situacao, date, descricao, categoria, tipo_transacao} = req.body;
            Transacao.create({valor, situacao, date, descricao, categoria, tipo_transacao}).then((transacao) => {
                res.status(201).json({message: "Cadastrado com sucesso!", transacao});
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
            const {valor, situacao, date, descricao, categoria, tipo_transacao} = req.body;

            Transacao.update(
                {valor, situacao, date, descricao, categoria, tipo_transacao},
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