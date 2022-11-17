<template>
    <b-list-group-item href="#" variant="light">
        <details>
            <summary>{{this.transacao.decricao}}</summary>
            <br>
            <p>
                Codigo: {{this.transacao.codigo}}
            </p>
            <p>
                Descricao: {{this.transacao.valor}}
            </p>
            <p>
                Tipo: {{this.transacao.tipo_transacao}}
            </p>            
            <p>
                Tipo: {{this.transacao.tipo_transacao}}
            </p>
            <b-button class="btn btn-azul" @click="this.deleteTransacao" >Excluir</b-button>
            <b-button class="btn btn-azul" >Editar</b-button>
        </details>
    </b-list-group-item>
</template>

<script>
import consult from "@/utils/api/localhost";

export default{
    name: 'ItemTransacao',
    props:{
        transacao:{
            type: Object,
            requered: true
        }
    },
    methods:{
        deleteTransacao(){
                consult.delete("/transacao/"+this.transacao.codigo).then(()=>{
            }).catch((e) => {
                console.error("Erro: ", e.message);
            });
        }
    }
}
</script>
