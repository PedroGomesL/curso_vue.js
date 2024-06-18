<template>
  <div>
    <navBar />
    <Footer />
    <router-view/>
  </div>
</template>

<script>
  import navBar from "./components/navBar.vue"
  import Footer from "./components/footer.vue"
  export default {
    components: {
      navBar,
      Footer,
    }
  }
</script>