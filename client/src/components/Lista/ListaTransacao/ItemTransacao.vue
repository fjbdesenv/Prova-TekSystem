<template>
    <b-list-group-item href="#" variant="light">
        <details>
            <summary>{{this.transacao.descricao}}</summary>
            <br>
            <p>
                Código: {{this.transacao.codigo}}
            </p>
            <p>
                Descrição: {{this.transacao.descricao}}
            </p>
            <p>
                Valor: {{this.transacao.valor}}
            </p>
            <p>
                Categoria: {{this.transacao.categoria}}
            </p>            
            <p>
                Tipo: {{this.transacao.tipo_transacao}}
            </p>
            <b-button class="btn btn-azul" @click="this.delete(this.transacao.codigo)" >Excluir</b-button>
            <b-button class="btn btn-azul" @click="this.editar($event, (this.transacao.codigo))" >Editar</b-button>
        </details>
    </b-list-group-item>
</template>

<script>

export default{
    name: 'ItemTransacao',
    props:{
        transacao:{
            type: Object,
            requered: true
        },
        delete: {
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
