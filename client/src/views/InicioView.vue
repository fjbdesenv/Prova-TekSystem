<template>
  <div>
    <Titulo titulo="Finanças"/>
  </div>
  <div class="container flex col">
    <Filtro></Filtro>
    <ListaResultado></ListaResultado>
  </div>
</template>

<script>
import Titulo from "@/components/Titulo.vue";
import Filtro from "@/components/Filtro.vue";
import ListaResultado from "@/components/Lista/ListaResultado/ListaResultado.vue";

export default {
  name: 'HomeView',
  components:{
    Titulo,
    Filtro,
    ListaResultado
  }
};
</script>
