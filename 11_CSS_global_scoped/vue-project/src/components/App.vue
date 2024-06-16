<template>
  <primeiroComponente/>
  <p>o dado de app é: {{ testando }}</p>
   <LifeCycle/>
</template>

<script>
import primeiroComponente from './components/primeiroComponente.vue'
import LifeCycle from './components/lifeCycle.vue'
export default {
  name: 'app',
  components: {
    primeiroComponente,
    LifeCycle
  },
  data() {
    return {
      testando: "teste"
    }
  }
}
</script>