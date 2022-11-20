<template>
    <br>{{transacao.descricao}}
    <br>{{transacao.valor}}
</template>

<script>
export default {
    name: 'ItemResultado',
    props:{
        transacao:{
            type: Object,
            requered: true
        }
    }
}
</script>