<template>
    <HelloWorld msg="Map"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
    name: 'MapView',
    components: {
        HelloWorld
    },
    data() {
        return {
            message: 'This is Map Page',
        };
    }
}
</script>

<style>

</style>