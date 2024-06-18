<template>
<h2>Está é a descrição da pessoa: </h2>
<Info :email="email" :esta_trabalhando=true />
<Form/>
</template>

<script>
import Info from './info.vue'
import Form from './form.vue'
export default {
    name: 'Pessoa',
    components: {
        Info,
        Form
    },
    data() {
        return {
            nome: 'Pedro',
            email: 'pedroffff@email.com'
        }
    }
}
</script>