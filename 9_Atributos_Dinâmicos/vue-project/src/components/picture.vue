<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
    name: 'picture',
    data() {
        return {
            avatar: "/img/avatar.png",
            descricao: "Pedro Gomes"
        }
    }
}
</script>