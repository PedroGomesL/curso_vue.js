<template>
    <h1>olá Vue!</h1>
    <p>meu nome é {{ nome }}, e trabalho com {{ profissão }}</p>
    <MultiplosEventos />
</template>

<script>

import MultiplosEventos from './MultiplosEventos.vue'
export default {
    name: 'primeiroComponente',
    components: {
        MultiplosEventos
    },
    data() {
        return {
            nome: "Pedro",
            profissão: "Agiota"
        }
    }
}
</script>