<template>
    <div>
        <h2>Meu formulário: </h2>
        <form @submit.prevent="enviarFormulario">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">            </div>
            <div>
                <Submit />
            </div>
        </form>
    </div>
</template>

<script>
import InputText from "./Form/inputText.vue";
import Submit from "./Form/submit.vue"

export default {
    name: 'Form',
    components: {
        InputText,
        Submit,
    },
    data() {
        return{
            name: "",
            email: ""
        }
    },
    methods: {
        enviarFormulario(e) {

            const name = this.name;
            const email = this.email;
            e.preventDefault();
            console.log('Formulário enviado!');
            console.log("O nome é: " + name);
            console.log("O email é: ", email);

            // AJAX

            // Inserir no BD
        }
    }
}
</script>
