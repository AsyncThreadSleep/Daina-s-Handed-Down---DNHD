<template>
    <div style="width: 100%;padding: 50px 0;">
        <el-carousel ref="carouselRef" :interval="3000" height="800px" @change="handleChange" v-lazy:background-image="require('@/assets/imgs/carousel/cabinet/back.png')">
            <div class="text-back" v-lazy:background-image="require('@/assets/imgs/carousel/cabinet/text-back.png')">
                <p>种族：<span>{{ showInfo.info.race }}</span></p>
                <p>职业：<span>{{ showInfo.info.type }}</span></p>
            </div>
            <el-carousel-item v-for="item in character" :key="item" class="character">
                <img alt="" v-lazy='cutSwitch ? item.imgs.man : item.imgs.woman' width="600px" height="800px" />
            </el-carousel-item>
            <el-switch v-model="cutSwitch" inline-prompt active-text="男" inactive-text="女" size="large" />
            <img alt="" v-lazy="showInfo.imgs.desc" width="200px" height="620px" class="desc-img"/>
        </el-carousel>
    </div>
</template>

<script>
import { ElCarousel, ElCarouselItem, ElSwitch } from 'element-plus';

export default {
    components: { ElCarousel, ElCarouselItem, ElSwitch },
    data() {
        return {
            character: [
                {
                    imgs: {
                        man: require('@/assets/imgs/character/20001.png'),
                        woman: require('@/assets/imgs/character/20002.png'),
                        desc: require('@/assets/imgs/carousel/cabinet/1.png')
                    },
                    info: {
                        type: '战士',
                        race: '人类',
                        desc: '自从太初创世纪经三界之乱一部分人类从强壮无比摧山裂石的魔族处学会了强化自己肉体的战斗技巧他们称这种能力为武术。战士们崇尚力量，强壮的身体是他们追求的目标。',
                        warCry: '生命不息 战斗不止',
                    }
                },
                {
                    imgs: {
                        man: require('@/assets/imgs/character/30001.png'),
                        woman: require('@/assets/imgs/character/30002.png'),
                        desc: require('@/assets/imgs/carousel/cabinet/2.png')
                    },
                    info: {
                        type: '法师',
                        race: '人类',
                        desc: '经历三界之乱，一部分人类从操纵风火雷电的阿修罗那里学会了和元素沟通，召唤雷电、火焰的能力也就是后来所说的魔法。没有人敢轻视那瘦弱的躯体里所蕴涵的毁灭一切的力量。',
                        warCry: '电光火石 呼风唤雨',
                    }
                },
                {
                    imgs: {
                        man: require('@/assets/imgs/character/40001.png'),
                        woman: require('@/assets/imgs/character/40002.png'),
                        desc: require('@/assets/imgs/carousel/cabinet/3.png')
                    },
                    info: {
                        type: '道士',
                        race: '人类',
                        desc: '很多人类修真者寻求到一种新的平和的力量，他们用精神和生命沟通，对生命和自然的理解无比深刻，这种力量被称为道术。可以用道术为他人治疗，也可利用符纸为媒介释放出道力。',
                        warCry: '毒攻愈术 虚怀若谷',
                    }
                },
            ],
            showInfo: null,
            cutSwitch: true,
        }
    },
    beforeMount() {
        this.showInfo = this.character[0];
    },
    methods: {
        handleChange(newValue) {
            this.showInfo = this.character[newValue];
        }
    },
}
</script>

<style scoped>
.el-carousel {
    width: 1680px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 15px;
    position: relative;
}

.text-back{
    width: 420px;
    height: 180px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 50px;
    left: 25px;
    color: rgb(194,141, 78);
}

.text-back p {
    font-size: 48px;
    line-height: 90px;
    text-align: center;
}

img {
    --img-ratio: 3/4;
    aspect-ratio: var(--img-ratio);
    object-fit: cover;
}

.desc-img {
    position: absolute;
    top: 50px;
    right: 80px;
}

.character {
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.el-switch {
    position: absolute;
    z-index: 4;
    bottom: 35px;
    left: calc(50% - 25px);
}
</style>