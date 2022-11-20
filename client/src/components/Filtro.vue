<template>
    <div class=" flex center row">
        <div class="w-25">
            <label for="ano">Ano: </label>
            <b-form-select v-model="ano.value"  name="ano" :options="this.ano.options"></b-form-select>
        </div>
        <div class="w-25">
            <label for="mes">Mês: </label>
            <b-form-select v-model="mes.value"  name="mes" :options="this.mes.options"></b-form-select>
        </div>
        <div class="w-25">
            <label for="min">Valor Min: </label>
            <b-form-input v-model="valor.min"  name="min"></b-form-input>
        </div>
        <div class="w-25">
            <label for="max">Valor Max: </label>
            <b-form-input v-model="valor.max"  name="max"></b-form-input>
        </div>
        <div class="m-10">
            <b-button class="btn btn-azul m-15" @click="this.filtrar" >Filtrar</b-button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import consult from "@/utils/api/localhost";

export default {
    name: 'Filtro',
    data: () => {
        return({
            ano:{
                value: 0,
                options: [
                    {value: 0, text: new Date().getFullYear()},
                    {value: 1, text: new Date().getFullYear()-1},
                    {value: 2, text: new Date().getFullYear()-2},
                    {value: 3, text: new Date().getFullYear()-3},
                    {value: 4, text: new Date().getFullYear()-4},
                    {value: 5, text: new Date().getFullYear()-5},
                    {value: 5, text: new Date().getFullYear()-6},
                    {value: 5, text: new Date().getFullYear()-7},
                    {value: 5, text: new Date().getFullYear()-9},
                    {value: 5, text: new Date().getFullYear()-8}
                ]
            },
            mes:{
                value: 0,
                options: [
                    {value: 0, text: 'Todos'},
                    {value: 1, text: 'Janeiro'},
                    {value: 2, text: 'Fevereiro'},
                    {value: 3, text: 'Março'},
                    {value: 4, text: 'Abril'},
                    {value: 5, text: 'Maio'},
                    {value: 6, text: 'Junho'},
                    {value: 7, text: 'Julho'},
                    {value: 8, text: 'Agosto'},
                    {value: 9, text: 'Setembro'},
                    {value: 10, text: 'Outubro'},
                    {value: 11, text: 'Novembro'},
                    {value: 12, text: 'Dezembro'},
                ]
            },
            valor:{
                min: -9999999,
                max: 9999999
            }
        });
    },
    methods:{
        ...mapMutations(['atualizarListaAuxTransacao']),
        filtrar(){   
            const aux = { 
                ano: this.ano.options[this.ano.value].text,
                mes: this.mes.value,
                min: this.valor.min,
                max: this.valor.max,
                consult: ''
            };

            if(aux.mes == 0){
                aux.consult = `transacao/ano/${aux.ano}/min/${aux.min}/max/${aux.max}`
            }else if(aux.mes > 0 && aux.mes < 13){
                aux.consult = `transacao/ano/${aux.ano}/mes/${aux.mes}/min/${aux.min}/max/${aux.max}`
            }
            
            consult.get(aux.consult).then((itens) => {
                this.$emit('resultado', itens.data);
                this.atualizarListaAuxTransacao(itens.data);
            }).catch((e) => {
                console.error("Erro : ", e.message);
            });
        }
    }
}
</script>