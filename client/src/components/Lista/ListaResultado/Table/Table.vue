<template>
    <b-table striped hover :items="this.gerarLista" :fields="campos"></b-table>
</template>

<script>
import {mapGetters} from 'vuex'; 
import mes from "@/utils/mes"

export default {
    name: "Table",
    data: () => {
        return ({
            campos: ["mes", "renda", "despesa", "total"],
            itens: [],
            total: {
                mes: 'Total',
                renda: 0.00,
                despesa: 0.00,
                total: 0.00                
            }
        });
    },
    props: {
        lista: {
            type: Array,
            requered: true
        }
    },
    computed:{
        ...mapGetters(['listaAuxTransacao']),
        gerarLista(){
            this.atualizarItens();
            return [...this.itens, this.total] ;
        }
    },
    methods:{
        atualizarItens(){
            this.apagarItens();
            for (const item of this.listaAuxTransacao) {
                const auxMes = mes[new Date(item.date).getMonth()+1];
                const aux = {
                    mes: auxMes,
                    renda: item.tipo_transacao == 1 ? item.valor : 0.00,
                    despesa: item.tipo_transacao == 2 ? item.valor : 0.00,
                    total: item.tipo_transacao == 1 ? item.valor : -item.valor  
                }

                this.itens.push(aux);
                this.atualizarTotal(aux);         
            }
        },
        atualizarTotal(item){
            this.total.renda += item.renda;
            this.total.despesa += item.despesa;
            this.total.total += item.total;
        },
        apagarItens(){
            this.itens = [];
            this.total = {
                mes: 'Total',
                renda: 0.00,
                despesa: 0.00,
                total: 0.00                
            }
        }
    }
}
</script>

<style lang="scss">
    table{
        margin-top: 1rem;
        thead{      
            background-color: rgba(200, 0, 0, 0.6);
        }
    }
</style>
