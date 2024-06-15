<template>
    <form action="">
        <div>
            <InputText />
        </div>
        <div>
            <InputText />
        </div>
        <div>
            <Submit />
        </div>
    </form>
</template>

<script>
import InputText from "./inputText.vue"
import Submit from "./submit.vue"

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    }
}
</script>