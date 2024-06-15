<template>
    <h1>olá Vue!</h1>
    <p>meu nome é {{ nome }}, e trabalho com {{ profissão }}</p>
</template>

<script>
export default {
    name: 'primeiroComponente',
    data() {
        return {
            nome: "Pedro",
            profissão: "Agiota"
        }
    }
}
</script>