<template>
    <div class="main-center">
        <p class="title">独家版本&nbsp;&nbsp;全网首发</p>
        <regionalism1></regionalism1>

        <p class="title">最新动态</p>
        <regionalism2 :list="list"></regionalism2>

        <p class="title">人物介绍</p>
        <regionalism3></regionalism3>
    </div>
</template>

<script>
import regionalism1 from '@/components/page-home/center/regionalism-1.vue';
import regionalism2 from '@/components/page-home/center/regionalism-2.vue';
import regionalism3 from '@/components/page-home/center/regionalism-3.vue';

export default {
    components: {
        regionalism1,
        regionalism2,
        regionalism3,
    },
    data() {
        return {
            list: [],
        }
    },
    methods: {
        getNotice() {
            const localData = JSON.parse(localStorage.getItem('notice'));
            const date = new Date().getTime();

            if (localData && date - localData.date < 1000 * 60 * 5) {
                this.list = localData.data;
                return;
            } else {
                fetch('https://api.yncs2022.com/notice-json')
                    .then(response => response.json())
                    .then(resData => {
                        const localData = {
                            date: date,
                            data: resData.data,
                        }
                        this.list = localData.data;
                        localStorage.setItem('notice', JSON.stringify(localData));
                    })
                    .catch(error => console.error(error));
            }
        }
    },
    mounted() {
        this.getNotice();
    }
}
</script>

<style scoped>
.main-center {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    width: 100%;
    height: 168px;
    font-size: 64px;
    text-align: center;
    line-height: 168px;
    color: rgb(247, 219, 118);
}
</style>
