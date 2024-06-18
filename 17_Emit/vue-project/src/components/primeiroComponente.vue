<template>
    <h1>olá Vue!</h1>
    <p>meu nome é {{ nome }}, e trabalho com {{ profissão }}</p>
    <MultiplosEventos />
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
</template>

<script>

import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue';
export default {
    name: 'primeiroComponente',
    components: {
        MultiplosEventos,
        Reutilizacao
    },
    data() {
        return {
            nome: "Pedro",
            profissão: "Agiota"
        }
    }
}
</script>