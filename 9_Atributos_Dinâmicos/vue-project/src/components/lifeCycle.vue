<template>
    <h1>meu nome é: {{ nome }} </h1>
</template>


<script>
export default {
    name: 'LifeCycle',
    data() {
        return {
            nome: 'Ainda não sei'
        }
    },
    created() {
        setTimeout(() => {
            this.nome = 'Pedrosviski'
        }, 1000)
    },
    mounted() {
        setTimeout(() => {
            this.nome = 'Pedron'
        }, 2000)
    }
}
</script>