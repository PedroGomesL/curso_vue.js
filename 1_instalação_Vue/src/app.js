const myNameApp = {
    data() {
        return {
            name: "Pedro",
            age: 17
        }
    }
}

Vue.createApp(myNameApp).mount("#app");