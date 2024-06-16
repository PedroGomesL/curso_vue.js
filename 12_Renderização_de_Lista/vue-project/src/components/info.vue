<template>
<p v-if="esta_trabalhando">Estou trabalhando no momento</p>
<p v-else>Estou em busca de novas oportunidades</p>
<p>Utilizo as seguintes tecnologias:</p>
<ul>
    <li v-for="(tecnology, index) in backend_tecnologies" v-bind:key="index">{{tecnology}}</li>
</ul>
<p>Utilizado as seguintes tecnologias para front-end: </p>
<ul>
    <li v-for="tecnology in frontend_techologies" :key="tecnology.id">
        {{ tecnology.language }}
    </li>
</ul>
<div>
    <button @click="showEmail">{{ textoBotao }}</button>
</div>
<p v-show="mostrar_email">mande uma mensagem para {{ email }}</p>
<p class="teste" >Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
<Picture />
</template>

<script>
import Picture from './picture.vue'
    export default {
        name: 'Info',
        components: {
            Picture
        },
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: false,
                email: 'pedron@gmail.com',
                meu_link: 'https://google.com',
                textoBotao: 'Mostrar e-mail',
                backend_tecnologies: ['JS', 'PHP', 'Python'],
                frontend_techologies: [
                    {id: 1, language: 'HTML'},
                    {id: 2, language: 'CSS'},
                    {id: 3, language: 'Vue'}
                ]
            }
        },
        methods: {
            showEmail() {
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email) {
                    thi.textoBotao = 'Mostras e-mail'
                } else {
                    this.textoBotao = 'Esconder e-mail'
                }
            }
        }
    }
</script>

<style>
    .paragrafo-pai {
        background-color: red;
    }
</style>