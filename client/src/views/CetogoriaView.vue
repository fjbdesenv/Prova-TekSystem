<template>
  <div class="container">
    <Titulo titulo="Categorias" />
    <ListaCategoria />
  </div>
</template>

<script>
import Titulo from "@/components/Titulo.vue";
import ListaCategoria from "@/components/Lista/ListaCategoria/ListaCategoria.vue";

export default{
  name: "CategoriaView",
  components:{
    Titulo,
    ListaCategoria
  }
}
</script>
