<template>
<p v-if="esta_trabalhando">Estou trabalhando no momento</p>
<p v-else>Estou em busca de novas oportunidades</p>
<p>Utilizo as seguintes tecnologias:</p>
<ul>
    <li>JS</li>
    <li>PHP</li>
    <li>Python</li>
</ul>
<p v-show="mostrar_email">mande uma mensagem para {{ email }}</p>
</template>

<script>
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: false,
                email: 'pedron@gmail.com'
            }
        }
    }
</script>