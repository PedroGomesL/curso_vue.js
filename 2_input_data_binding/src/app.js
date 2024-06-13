const myNameApp = {
    data() {
        return {
            name: "Pedro",
            age: 17,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.input_name)
            this.name = this.input_name;
        }
    }
}

Vue.createApp(myNameApp).mount("#app");