<template>
    <b-button class="btn btn-verde" @click="cadastrar" >Nova Transação</b-button>

    <b-alert show v-if="this.mgs.excluido"> Excluido com sucesso! </b-alert>
    <b-alert show variant="danger" v-if="this.mgs.erro" >Não é possivel excluir essa transação!</b-alert>
    
    <b-list-group v-for="(transacao, index) in this.listaTransacao">
      <ItemTransacao :transacao="transacao" :delete="apagar" :editar="editar"  />
    </b-list-group>

</template>
<script>
import ItemTransacao from "./ItemTransacao.vue";
import consult from "@/utils/api/localhost";
import { mapGetters, mapMutations } from "vuex";

export default{
  name: 'ListaTransacao',
  data: () =>{
    return({
      mgs:{
        excluido: false,
        erro: false,
      }
    })
  },
  components:{
    ItemTransacao
  },
  computed:{
    ...mapGetters([
      'listaTransacao'
    ])
  },
  methods:{
    ...mapMutations([
      'deleteTransacao',
      'atualizarListaTransacao',
      'atualizarOpTransacao',
    ]),
    msg(tipo){
      this.mgs[tipo] = true;
      setTimeout(()=>{this.mgs[tipo] = false}, 2000);
    },
    atualizar(){
      consult.get("transacao").then((itens) => {
        this.atualizarListaTransacao(itens.data);
      }).catch((e) => {
        console.error("Erro : ", e.message);
      });
    },
    apagar(codigo){
      consult.delete("transacao/"+codigo).then(()=>{
        this.deleteTransacao(codigo);
        this.msg('excluido');
      }).catch((e) => {
          console.error("Erro: ", e.message);
          this.msg('erro');
      });
    },
    cadastrar(){
      this.atualizarOpTransacao({ value: true, codigo: -1});
    },
    editar(event, codigo){
      this.atualizarOpTransacao({ value: true, codigo: codigo})
    }
  },
  created(){
    this.atualizar();
  }
}
</script>
