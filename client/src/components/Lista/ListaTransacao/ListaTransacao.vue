<template>
    <b-button class="btn btn-verde" >Nova Transação</b-button>
        
    <b-list-group v-for="(transacao, index) in this.listaTransacoes">
      <ItemTransacao :transacao="transacao" />
    </b-list-group>
</template>
<script>
import ItemTransacao from "./ItemTransacao.vue";
import consult from "@/utils/api/localhost";

export default{
  name: 'ListaTransacao',
  data: ()=>{
    return({
      listaTransacoes: []
    });
  },
  components:{
    ItemTransacao
  },
  methods:{
    getTransacoes(){
      consult.get("transacao").then((itens) => {
        this.listaTransacoes = itens.data;
      }).catch((e) => {
        console.error("Erro : ", e.message);
      });
    }
  },
  created(){
    this.getTransacoes();
  }
}
</script>
