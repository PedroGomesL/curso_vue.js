<template>
  <Header/>
  <primeiroComponente />
  <p class="paragrafo-pai">o dado de app é: {{ testando }}</p>
  <LifeCycle />
  <pessoa />

</template>

<script>
import primeiroComponente from './components/primeiroComponente.vue'
import LifeCycle from './components/lifeCycle.vue'
import Pessoa from './components/pessoa.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    primeiroComponente,
    LifeCycle,
    Pessoa,
    Header
  },
  data() {
    return {
      testando: "teste"
    }
  }
}
</script>

<style>
body {
  background-color: #3d3d3d;
  color: white;
}

a {
  color: red;
}

.teste {
  background-color: red;
}
</style>