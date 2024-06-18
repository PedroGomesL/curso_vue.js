<template>
    <div>
        <button @click="$emit('mudar-imagem')">Trocar imagem de perfil</button>
    </div>
</template>

<script>
export default {
    name: 'MudarImagem',
    emits: ['mudar-imagem']
}
</script>