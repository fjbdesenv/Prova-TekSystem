<template>    
    <div class="container cadastro">
        <header>
            <h2 v-if="this.showEditar" >Editar</h2>
            <h2 v-else>Cadastro</h2>
        </header>
        <div class="container">
            <p>
                <label for="descricao">Descrição: </label>
                <b-form-input v-model="descricao" placeholder="descrição"></b-form-input>
            </p>
            <p>
                <label for="tipo">Tipo: </label>
                <b-form-select v-model="this.tipo.value" :options="this.tipo.options"></b-form-select>
            </p>
            
            <b-button v-if="this.showEditar" class="btn btn-azul" @click="editar"> Editar </b-button>
            <b-button v-else class="btn btn-azul" @click="cadastrar"> Cadastrar </b-button>
            
            <b-button class="btn btn-azul" @click="voltar"> Voltar </b-button>
        </div>
        
        <b-alert show variant="danger" v-if="erro.cadastrar" >Não foi possivel cadastrar, verifique os campos!</b-alert>
        <b-alert show variant="danger" v-if="erro.editar" >Não foi possivel editar, verifique os campos!</b-alert>
        
    </div>
</template>

<script>
import consult from '@/utils/api/localhost';
import { mapMutations } from "vuex";

export default{
    name: 'CadastrarCategoria',
    data: () =>{
        return ({
            descricao: '',
            tipo: {
                value: 1,
                options: [
                    {value: 1, text: 'Receita'},
                    {value: 2, text: 'Despesa'}
                ] 
            },
            showEditar: false,
            erro: {
                cadastrar: false,
                editar: false
            }
        });
    },
    props:{
        codigo: {
            type: Number,
            requered: true
        },
    },
    methods:{
        ...mapMutations([
            'atualizarOpCategoria'
        ]),
        cadastrar(){
            if(this.verificarCampos()){
                consult.post("categoria", {
                    'descricao': this.descricao,
                    'tipo_categoria': this.tipo.value,
                }).then((response)=>{
                    this.atualizarOpCategoria({ value:  false, codigo: -1});
                }).catch(()=>{
                    alert("Erro ao cadastrar");
                    console.error("Erro: ", e.message);
                });
            }else{
                this.erro.cadastrar = true;
                setTimeout(()=>{
                    this.erro.cadastrar = false;
                }, 2000)
            }

        },
        editar(){
            if (this.verificarCampos()){
                consult.put("categoria/" + this.codigo, {
                    'descricao': this.descricao,
                    'tipo_categoria': this.tipo.value
                }).then((response)=>{
                    this.atualizarOpCategoria({ value:  false, codigo: -1});
                }).catch(()=>{
                    alert("Erro ao cadastrar!");
                    console.error("Erro: ", e.message);
                });
            }else{
                this.erro.editar = true;
                setTimeout(()=>{
                    this.erro.editar = false;
                }, 2000)
            }
        },
        consultar(){
            consult.get("categoria/" + this.codigo).then((response)=>{
                this.descricao = response.data.descricao;
                this.tipo.value = response.data.tipo_categoria;
            }).catch(()=>{
                alert("Erro ao editar!");
                console.error("Erro: ", e.message);
            });
        },
        verificarCampos(){
            return this.descricao != ''
        },
        voltar(){
            this.atualizarOpCategoria({ value:  false, codigo: -1});
        }
    },
    created(){
        if(this.codigo > 0){
            this.showEditar = true;
            this.consultar();
        }else{
            this.showEditar = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        .cadastro{
            background-color: #d99;

            margin: 2rem;
            padding: 1rem;

            border-radius: 0.5rem;
        }
    }
</style>