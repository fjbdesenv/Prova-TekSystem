<template>
  <div class="container">
    <Titulo titulo="Transaçoes" />
    <CadastrarTransacao 
      v-if="this.getOpTransacao.value"
      :codigo="this.getOpTransacao.codigo"
    />    
    <ListaTransacao v-else />
</div>
</template>

<script>
import Titulo from "@/components/Titulo.vue";
import ListaTransacao from "@/components/Lista/ListaTransacao/ListaTransacao.vue";
import CadastrarTransacao from "@/components/Cadastro/CadastrarTransacao.vue";
import { mapGetters } from "vuex";

export default{
  name: "TransacaoView",
  computed:{
   ...mapGetters(['getOpTransacao']) 
  },
  components:{
    Titulo,
    ListaTransacao,
    CadastrarTransacao
  }
}
</script>
