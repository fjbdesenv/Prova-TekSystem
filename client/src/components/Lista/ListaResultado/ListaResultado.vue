<template>
    <div class="conianer col flex">
        <b-table striped hover :items="this.gerarLista" :fields="campos"></b-table>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'; 
import mes from "@/utils/mes"

export default {
    name: "Table",
    data: () => {
        return ({
            campos: ["mes", "renda", "despesa", "total"],
            itens: {
                meses: undefined
            }
        });
    },
    computed:{
        ...mapGetters(['listaAuxTransacao']),
        gerarLista(){
            this.atualizarItens();
            return this.itens.meses.filter((item) => item !== undefined);
        }
    },
    methods:{
        atualizarItens(){
            this.apagarItens();
            for (const item of this.listaAuxTransacao) {
                const indexMes = Number(new Date(item.date).getMonth());
                const aux = {
                    mes: mes[indexMes],
                    renda: item.tipo_transacao == 1 ? item.valor : 0.00,
                    despesa: item.tipo_transacao == 2 ? item.valor : 0.00,
                    total: item.tipo_transacao == 1 ? item.valor : -item.valor  
                }
                
                if(this.itens.meses[indexMes] === undefined){
                    this.itens.meses[indexMes] = aux;
                }else{
                    console.log("Else inicio", this.itens.meses[indexMes], aux);
                    this.itens.meses[indexMes].renda += aux.renda;
                    this.itens.meses[indexMes].despesa += aux.despesa;
                    this.itens.meses[indexMes].total += aux.total;
                    console.log("Else fim", this.itens.meses[indexMes]);
                } 

                this.atualizarTotal(aux);         
            }
        },
        atualizarTotal(item){
            const total = this.itens.meses[12];
            total.renda += item.renda;
            total.despesa += item.despesa;
            total.total += item.total;
        },
        apagarItens(){
            this.itens.meses = [
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                {
                    mes: 'Total',
                    renda: 0.00,
                    despesa: 0.00,
                    total: 0.00                
                }
            ];
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
