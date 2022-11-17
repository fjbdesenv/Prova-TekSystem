<template>
    <b-button class="btn btn-verde" >Nova Categoria</b-button>
        
    <b-list-group v-for="(categoria, index) in this.listaCategoria">
      <ItemCategoria :categoria="categoria" />
    </b-list-group>
</template>
<script>
import ItemCategoria from "./ItemCategoria.vue";
import consult from "@/utils/api/localhost";

export default{
  name: 'ListaCategoria',
  data: ()=>{
    return({
      listaCategoria: []
    });
  },
  components:{
    ItemCategoria
  },
  methods:{
    getCategorias(){
      consult.get("categoria").then((itens) => {
        this.listaCategoria = itens.data;
      }).catch((e) => {
        console.error("Erro : ", e.message);
      });
    }
  },
  created(){
    this.getCategorias();
  }
}
</script>
