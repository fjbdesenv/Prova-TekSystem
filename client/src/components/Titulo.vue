<template>
    <h1 class="titulo">{{titulo}}</h1>
</template>

<script>
export default{
    name: 'Titulo',
    props:{
        titulo:{
            type: String,
            requered: true,
            default: "Título"
        }
    }
}
</script>

<style lang="scss" scoped>
    .titulo{
        text-align: center;
        padding: 1rem;
        color: indianred;
    }
</style>