<template>
  <div>
    <Titulo titulo="Finanças"/>
  </div>
  <div class="container flex col">
    <Filtro @resultado="this.setLista($event)"></Filtro>
    <ListaResultado :lista="this.listaTransacao" ></ListaResultado>
  </div>
</template>

<script>
import Titulo from "@/components/Titulo.vue";
import Filtro from "@/components/Filtro.vue";
import ListaResultado from "@/components/Lista/ListaResultado/ListaResultado.vue";

export default {
  name: 'HomeView',
  data: () => {
    return({
      listaTransacao: []
    });
  },
  components:{
    Titulo,
    Filtro,
    ListaResultado
  },
  methods:{
    setLista(lista){
      this.listaTransacao = lista;
    }
  }
};
</script>
