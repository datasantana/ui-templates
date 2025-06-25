<template>
    <HelloWorld msg="Scene"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
    name: 'SceneView',
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