<template>
    <b-list-group-item href="#" variant="light">
        <details>
            <summary>{{this.categoria.descricao}}</summary>
            <br>
            <p>
                Código: {{this.categoria.codigo}}
            </p>
            <p>
                Descrição: {{this.categoria.descricao}}
            </p>
            <p>
                Tipo: {{this.categoria.tipo_categoria == 1 ? 'Renda' : 'Despesa'}}
            </p>            
            <b-button class="btn btn-azul" @click="this.delete(this.categoria.codigo)" >Excluir</b-button>
            <b-button class="btn btn-azul" @click="this.editar($event, (this.categoria.codigo))" >Editar</b-button>
        </details>
    </b-list-group-item>
</template>

<script>

export default{
    name: 'ItemCategoria',
    props:{
        categoria:{
            type: Object,
            requered: true
        },
        delete:{
            type: Function,
            requered: true
        },
        editar:{
            type: Function,
            requered: true
        }
    }
}
</script>
