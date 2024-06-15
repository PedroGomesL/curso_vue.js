<template>
  <primeiroComponente/>
  <p>o dado de app é: {{ testando }}</p>
   <LifeCycle/>
   <pessoa/>
</template>

<script>
import primeiroComponente from './components/primeiroComponente.vue'
import LifeCycle from './components/lifeCycle.vue'
import Pessoa from './components/pessoa.vue'

export default {
  name: 'app',
  components: {
    primeiroComponente,
    LifeCycle,
    Pessoa
  },
  data() {
    return {
      testando: "teste"
    }
  }
}
</script>