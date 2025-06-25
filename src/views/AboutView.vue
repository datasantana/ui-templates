<template>
    <HelloWorld msg="About"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
    name: 'AboutView',
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