<template>
  <div class="container">
    <Titulo titulo="Categorias" />
    <CadastrarCategoria 
      v-if="this.getOpCategoria.value"
      :codigo="this.getOpCategoria.codigo" 
    />
    <ListaCategoria v-else/>
  </div>
</template>

<script>
import Titulo from "@/components/Titulo.vue";
import ListaCategoria from "@/components/Lista/ListaCategoria/ListaCategoria.vue";
import CadastrarCategoria from "@/components/Cadastro/CadastrarCategoria.vue";
import { mapGetters } from "vuex";

export default{
  name: "CategoriaView",
  computed:{
    ...mapGetters(['getOpCategoria'])
  },
  components:{
    Titulo,
    ListaCategoria,
    CadastrarCategoria
  },
}
</script>
