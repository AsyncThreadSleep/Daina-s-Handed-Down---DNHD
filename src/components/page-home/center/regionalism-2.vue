<template>
    <div class="regionalism-2" v-lazy:background-image="require('@/assets/imgs/backgrounds/notice-border.png')">
        <el-carousel class="left" :interval="2000" height="400px">
            <el-carousel-item v-for="item in imgs" :key="item">
                <img alt="" v-lazy="item" style="width: 100%; height: 100%; object-fit: cover;">
            </el-carousel-item>
        </el-carousel>
        <div class="right">
            <ul style="list-style: none;">
                <li v-for="item in list" :key="item" class="lis" @click="goNotice(item)">
                    <p>
                        【公告】<span class="lis-title">{{ item }}</span><span>2025-11-04</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ElCarousel, ElCarouselItem } from 'element-plus';

export default {
    components: {
        ElCarousel,
        ElCarouselItem,
    },
    props: {
        list: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            imgs: [
                require('@/assets/imgs/carousel/notice/a.png'),
                require('@/assets/imgs/carousel/notice/b.png'),
                require('@/assets/imgs/carousel/notice/c.png'),
                require('@/assets/imgs/carousel/notice/d.png'),
                require('@/assets/imgs/carousel/notice/e.png'),
            ]
        }
    },
    methods: {
        goNotice(item) {
            this.$router.push({
                path: '/notice/' + item,
            })
        }
    }
}
</script>

<style scoped>
.regionalism-2 {
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

.left {
    width: 1200px;
    height: 400px;
}

.right {
    width: 600px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #d69823da;
    border-left: 0;
    padding: 15px;
    overflow: auto;
    scrollbar-width: none;
}

.lis>p {
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    line-height: 24px;
}

.lis-title {
    display: inline-block;
    width: 320px;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.lis:hover {
    color: #d69823da;
    cursor: pointer;
}

.bottom {
    width: 100%;
    height: 100px;
}
</style>