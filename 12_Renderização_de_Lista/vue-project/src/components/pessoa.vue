<template>
<h2>Está é a descrição da pessoa: </h2>
<Info/>
<Form/>
</template>

<script>
import Info from './info.vue'
import Form from './Form/form.vue'
export default {
    name: 'Pessoa',
    components: {
        Info,
        Form
    },
    data() {
        return {
            nome: 'Pedro'
        }
    }
}
</script>