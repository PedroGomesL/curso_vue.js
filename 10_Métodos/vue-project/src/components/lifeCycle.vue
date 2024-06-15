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
        }, 1000);
        this.LifeCycle() 
    },
    mounted() {
        setTimeout(() => {
            this.nome = 'Pedron'
        }, 2000);
        this.LifeCycle() 
    },
    methods: {
    LifeCycle() {
      console.log("Executou")
    }
  }
}
</script>