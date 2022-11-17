<template>
  <div class="container">
    <Titulo titulo="Transaçoes" />
    <ListaTransacao />
  </div>
</template>

<script>
import Titulo from "@/components/Titulo.vue";
import ListaTransacao from "@/components/Lista/ListaTransacao/ListaTransacao.vue";

export default{
  name: "TransacaoView",
  components:{
    Titulo,
    ListaTransacao
  }
}
</script>
