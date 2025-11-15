<template>
    <div class="main-top" v-lazy:background-image="require('@/assets/imgs/backgrounds/top-back/home.webp')"></div>
</template>

<style scoped>
.main-top {
    width: 100%;
    height: 960px;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    overflow: visible;
}

.main-top::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 250px;
    left: 0;
    bottom: 0;
    z-index: 0;
    background: linear-gradient(to top, #eee, rgba(238, 238, 238, 0));
}
</style>