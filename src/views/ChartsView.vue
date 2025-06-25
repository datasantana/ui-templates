<template>
    <HelloWorld msg="Charts"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
    name: 'ChartsView',
    components: {
        HelloWorld
    },
    data() {
        return {
            message: 'This is About Page',
        };
    }
}
</script>

<style>

</style>