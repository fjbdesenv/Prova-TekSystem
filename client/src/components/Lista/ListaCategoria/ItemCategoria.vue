<template>
    <b-list-group-item href="#" variant="light">
        <details>
            <summary>{{this.categoria.decricao}}</summary>
            <br>
            <p>
                Codigo: {{this.categoria.codigo}}
            </p>
            <p>
                Descricao: {{this.categoria.descricao}}
            </p>
            <p>
                Tipo: {{this.categoria.tipo_categoria}}
            </p>            
            <b-button class="btn btn-azul" @click="this.deleteCategoria" >Excluir</b-button>
            <b-button class="btn btn-azul" >Editar</b-button>
        </details>
    </b-list-group-item>
</template>

<script>
import consult from "@/utils/api/localhost";

export default{
    name: 'ItemCategoria',
    props:{
        categoria:{
            type: Object,
            requered: true
        }
    },
    methods:{
        deleteCategoria(){
                consult.delete("/categoria/"+this.categoria.codigo).then(()=>{
            }).catch((e) => {
                console.error("Erro: ", e.message);
            });
        }
    }
}
</script>
