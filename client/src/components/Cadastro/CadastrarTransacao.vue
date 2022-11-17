<template>    
    <div class="container cadastro">
        <header>
            <h2 v-if="this.showEditar" >Editar</h2>
            <h2 v-else>Cadastro</h2>
        </header>
        <div class="container">
            <p>
                <label for="descricao">Descrição: </label>
                <b-form-input v-model="descricao" type="text" name="descricao" placeholder="Descrição"></b-form-input>
            </p>
            <p>
                <label for="valor">Valor: </label>
                <b-form-input v-model="valor" type="number" name="valor" ></b-form-input>
            </p>
            <p>
                <label for="date">Data: </label>
                <b-form-input v-model="date" type="date" placeholder="date" name="date" ></b-form-input>
            </p>
            <p>
                <label for="categoria">Categoria: </label>
                <b-form-select v-model="categoria.value"  name="categoria" :options="this.categoria.options"></b-form-select>
            </p>
            <p>
                <label for="situacao">Situação: </label>
                <b-form-select v-model="situacao.value"  name="situacao" :options="this.situacao.options"></b-form-select>
            </p>
            <p>
                <label for="tipe">Tipo: </label>
                <b-form-select v-model="tipo.value"  name="tipo" :options="this.tipo.options"></b-form-select>
            </p>
            
            <b-button v-if="this.showEditar" class="btn btn-azul" @click="editar"> Editar </b-button>
            <b-button v-else class="btn btn-azul" @click="cadastrar"> Cadastrar </b-button>
            
            <b-button class="btn btn-azul" @click="voltar"> Voltar </b-button>
        </div>
    </div>
</template>

<script>
import consult from '@/utils/api/localhost';
import { mapMutations } from "vuex";

export default{
    name: 'CadastrarTransacao',
    data: () =>{
        return ({
            descricao: '',
            valor: 0,
            categoria: {
                value: 0,
                options: [] 
            },
            situacao: {
                value: 1,
                options: [
                    {value: 1, text: 'Aberto'},
                    {value: 2, text: 'Fechado'},
                    {value: 2, text: 'Fechado Parcial'}
                ] 
            },
            tipo: {
                value: 1,
                options: [
                    {value: 1, text: 'Recebimento'},
                    {value: 2, text: 'Pagamento'}
                ] 
            },
            date: Date(),
            showEditar: false
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
            'atualizarOpTransacao'
        ]),
        cadastrar(){
            consult.post("transacao", {
                'valor': this.valor,
                'descricao': this.descricao,
                'situacao': this.situacao.value,
                'categoria': this.categoria.value,
                'tipo_transacao': this.tipo.value,
                'date': this.date,
            }).then((response)=>{
                this.atualizarOpTransacao({ value:  false, codigo: -1});
            }).catch(()=>{
                alert("Erro ao cadastrar");
                console.error("Erro: ", e.message);
            });
        },
        editar(){
            consult.put("transacao/" + this.codigo, {
                'valor': this.valor,
                'descricao': this.descricao,
                'situacao': this.situacao.value,
                'categoria': this.categoria.value,
                'tipo_transacao': this.tipo.value,
                'date': this.date,
            }).then((response)=>{
                this.atualizarOpTransacao({ value:  false, codigo: -1});
            }).catch(()=>{
                alert("Erro ao cadastrar!");
                console.error("Erro: ", e.message);
            });
        },
        consultar(){
            consult.get("transacao/" + this.codigo).then((response)=>{
                this.valor = response.data.valor;
                this.descricao = response.data.descricao;
                this.situacao.value = response.data.situacao;
                this.categoria.value = response.data.categoria;
                this.tipo.value = response.data.tipo_transacao;
                this.date = response.data.date;
            }).catch(()=>{
                alert("Erro ao editar!");
                console.error("Erro: ", e.message);
            });
        },
        consultarCategoria(){
            consult.get("categoria").then((response)=>{
                
                const itens = response.data;

                for (let item of itens) {
                    if(this.showEditar && item.codigo === this.codigo) this.categoria.value = this.codigo;
                    this.categoria.options.push({value: item.codigo, text: item.descricao});
                }

            }).catch((e)=>{
                alert("Erro ao editar!");
                console.error("Erro: ", e.message);
            });
        },
        voltar(){
            this.atualizarOpTransacao({ value:  false, codigo: -1});
        }
    },
    created(){
        if(this.codigo > 0){
            this.showEditar = true;
            this.consultar();
        }else{
            this.showEditar = false;
        }
        this.consultarCategoria();
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