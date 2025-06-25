<template>
    <HelloWorld msg="Vite + Vue"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            message: 'This is Home Page',
        };
    }
}
</script>

<style>

</style>