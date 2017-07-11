<template>
    <div>
        <p class="t1">Hello {{ name }}-page1</p>
        <p class="t1">Welcome to China!</p>
    </div>
</template>
<script>
    export default {
        props: [ 'name' ],
        replace: false,
    };
</script>