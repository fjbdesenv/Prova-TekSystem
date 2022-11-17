<template>
  <Menu/>
  <Conteudo/>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Conteudo from "@/components/Conteudo.vue";

export default{
  name: 'App',
  components:{
    Menu,
    Conteudo
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import "@/assets/scss/style.scss";
</style>
