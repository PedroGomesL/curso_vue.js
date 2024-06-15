<template>
<p v-if="esta_trabalhando">Estou trabalhando no momento</p>
<p v-else>Estou em busca de novas oportunidades</p>
<p>Utilizo as seguintes tecnologias:</p>
<ul>
    <li>JS</li>
    <li>PHP</li>
    <li>Python</li>
</ul>
<div>
    <button @click="showEmail">{{ textoBotao }}</button>
</div>
<p v-show="mostrar_email">mande uma mensagem para {{ email }}</p>
<p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
<Picture/>
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
                textoBotao: 'Mostrar e-mail'
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