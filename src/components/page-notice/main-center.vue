<template>
    <div class="main-center">
        <div v-show="!showArticle">
            <h1 style="text-align: center;line-height: 168px;padding: 50px 0;font-size: 60px;">官方公告</h1>
            <div class="rout">
                <a class="rout-a"></a>
                <router-link v-for="(item) in dataNotice" :key="item" :to="'/notice/' + item" class="rout-a"
                    @click="goNotice(item)">
                    <img v-lazy="require('@/assets/ui/svg/notice.svg')" alt=""
                        style="width: 30px;height: 30px;vertical-align: middle;">
                    <p style="width: 925px;display: flex;justify-content: space-between;">
                        {{ item }}
                        <span>{{ item.data }}</span>
                    </p>
                </router-link>
            </div>
        </div>

        <router-view v-show="showArticle" @closeArticle="closeArticle" :title="title" :html="html"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showArticle: false,
            dataNotice: null,
            html: null,
            title: null
        }
    },
    methods: {
        goNotice(item) {
            this.showArticle = true;
            this.title = item;
            fetch(`https://api.yncs2022.com/notice-html/${item}/index.html`, {
                method: 'GET',
            })
                .then(response => response.text())
                .then(resData => {
                    this.html = resData;
                })
                .catch(error => console.error(error));
        },
        closeArticle() {
            this.showArticle = false;
        },
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
                        this.dataNotice = localData.data;
                        localStorage.setItem('notice', JSON.stringify(localData));
                    })
                    .catch(error => console.error(error));
            }
        }
    },
    created() {
        this.dataNotice = JSON.parse(localStorage.getItem('notice'))?.data || null;
        if (!this.dataNotice) {
            this.getNotice();
        }

        if (this.$route.params.title) {
            this.goNotice(this.$route.params.title);
        }
    }
}
</script>

<style scoped>
.main-center {
    width: 100%;
}

.rout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.rout-a {
    width: 1680px;
    font-size: 30px;
    line-height: 80px;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    border-top: 1px solid rgb(0, 0, 0);
    border-bottom: 1px solid rgb(0, 0, 0);
    margin-top: -1px;
}

.rout-a:hover {
    color: #d69823da;
    cursor: pointer;
}

.rout-a>img {
    margin-left: 350px;
    margin-right: 25px;
}
</style>
