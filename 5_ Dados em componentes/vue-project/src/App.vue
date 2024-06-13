<template>
  <primeiroComponente/>
  <p>o dado de app é: {{ testando }}</p>
</template>

<script>
import primeiroComponente from './components/primeiroComponente.vue'
export default {
  name: 'app',
  components: {
    primeiroComponente
  },
  data() {
    return {
      testando: "teste"
    }
  }
}
</script>