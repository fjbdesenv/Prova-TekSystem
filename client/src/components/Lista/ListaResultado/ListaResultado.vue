<template>
    <div class="conianer col flex">
        <Table :lista="this.lista" />
    </div>
</template>

<script>
import Table from './Table/Table.vue';
export default {
    name: 'ListaResultado',
    props:{
        lista:{
            type: Array,
            requerd: true
        }
    },
    components:{
        Table
    }
}
</script>