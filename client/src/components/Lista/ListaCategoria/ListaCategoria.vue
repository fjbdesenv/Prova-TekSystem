<template>
    <b-button class="btn btn-verde" @click="cadastrar" >Nova Categoria</b-button>

    <b-alert show v-if="mgs.excluido"> Excluido com sucesso! </b-alert>
    <b-alert show variant="danger" v-if="mgs.erro" >Não é possivel excluir essa categoria!</b-alert>
    
    <b-list-group v-for="(categoria, index) in this.listaCategoria">
      <ItemCategoria :categoria="categoria" :delete="apagar" :editar="editar" />
    </b-list-group>

</template>
<script>
import ItemCategoria from "./ItemCategoria.vue";
import consult from "@/utils/api/localhost";
import { mapGetters, mapMutations } from "vuex";

export default{
  name: 'ListaCategoria',
  data: () =>{
    return({
      mgs:{
        excluido: false,
        erro: false,
      }
    })
  },
  components:{
    ItemCategoria
  },
  computed:{
    ...mapGetters([
      'listaCategoria'
    ])
  },
  methods:{
    ...mapMutations([
      'deleteCategoria',
      'atualizarListaCategoria',
      'atualizarOpCategoria'
    ]),
    msg(tipo){
      this.mgs[tipo] = true;
      setTimeout(()=>{this.mgs[tipo] = false}, 2000);
    },
    atualizar(){
      consult.get("categoria").then((itens) => {
        this.atualizarListaCategoria(itens.data);
      }).catch((e) => {
        console.error("Erro : ", e.message);
      });
    },
    apagar(codigo){
      consult.delete("/categoria/"+codigo).then(()=>{
        this.deleteCategoria(codigo);
        this.msg('excluido');
      }).catch((e) => {
          console.error("Erro: ", e.message);
          this.msg('erro');
      });
    },
    cadastrar(){
      this.atualizarOpCategoria({ value: true, codigo: -1});
    },
    editar(event, codigo){
      this.atualizarOpCategoria({ value: true, codigo: codigo})
    }
  },
  created(){
    this.atualizar();
  }
}
</script>
