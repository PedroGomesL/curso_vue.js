<template>
    <div id="main-banner">
        <h1>Make Your Burger</h1>
    </div>
</template>

<script>
export default {
    name: "Burger"

}
</script>

<style scoped>

#main-banner {
    background-image: url("../../public/img/burger.jpg");
    background-position: center;
    background-size:cover;
    height: 30em;
    display:flex;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: flex-start;
}

#main-banner h1 {
    color: #fff;
    text-align: center;
    font-size: 2.5em;
    background-color: #222;
    padding: 2%;
}
</style>