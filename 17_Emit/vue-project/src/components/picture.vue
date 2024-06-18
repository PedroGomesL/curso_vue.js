<template>
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImagem" />
</template>

<script>
import MudarImagem from './Mudarimagem.vue'
export default {
    name: 'picture',
    components: {
        MudarImagem
    },
    data() {
        return {
            avatar: "/img/avatar.png",
            descricao: "Pedro Gomes"
        }
    },methods : {
        trocarImagem() {
            this.avatar = '/img/avatar2.png'
        }
    }
}
</script>