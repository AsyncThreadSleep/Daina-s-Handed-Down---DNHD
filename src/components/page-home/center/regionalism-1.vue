<template>
    <div class="regionalism-1" v-lazy:background-image="require('@/assets/imgs/backgrounds/notice-border.png')">
        <div class="button">
            <a href="https://api.yncs2022.com/public/downloads/Downloads.rar">
                <img v-lazy="buttonImgs.default1" alt="" @mouseenter="loadHoverImage(buttonImgs.hover1, $event)"
                @mouseleave="resetBackground(buttonImgs.default1, $event)">
            </a>
             <a href="javascript:;">
                <img v-lazy="buttonImgs.default2" alt="" @mouseenter="loadHoverImage(buttonImgs.hover2, $event)"
                @mouseleave="resetBackground(buttonImgs.default2, $event)">
             </a>
        </div>
        <img v-lazy="require('@/assets/imgs/backgrounds/advertising.png')" alt=""
            style="width: 500px; object-fit: cover;">
    </div>
</template>

<script>
export default{
    data() {
        return {
            buttonImgs: {
                default1: require('@/assets/ui/png/a1.png'),
                hover1: require('@/assets/ui/png/a2.png'),
                default2: require('@/assets/ui/png/b1.png'),
                hover2: require('@/assets/ui/png/b2.png'),
            }
        }
    },
    methods: {
        loadHoverImage(hoverImg, event) {
            event.target.src = hoverImg;
        },
        resetBackground(defaultImg, event) {
            event.target.src = defaultImg;
        }
    }
}
</script>

<style scoped>
.regionalism-1 {
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-size: 1875px 100%;
    background-repeat: no-repeat;
    background-position: center center;
}

.button {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>