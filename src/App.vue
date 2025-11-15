<template>
  <nav>
    <div class="nav-top">
      <div class="icon"></div>
      &nbsp;&nbsp;&nbsp;
      <RouterLink class="router-li" to="/home">首&nbsp;页</RouterLink>
      <RouterLink class="router-li" to="/notice">公&nbsp;告</RouterLink>
      <RouterLink class="router-li" to="/forum">论&nbsp;坛</RouterLink>
      <RouterLink class="router-li" to="/streaming">直&nbsp;播</RouterLink>
      <RouterLink class="router-li" to="/strategy">攻&nbsp;略</RouterLink>
      <RouterLink class="router-li" to="/handbook">图&nbsp;鉴</RouterLink>
      <a class="router-li" href="javascript:;">下&nbsp;载</a>
    </div>
    <div class="nav-bottom">
      <ul class="nav-bottom-ul">
        <li style="width: 80px;"></li>
        &nbsp;&nbsp;&nbsp;
        <li class="nav-bottom-li"></li>
        <li class="nav-bottom-li"></li>
        <li class="nav-bottom-li"></li>
        <li class="nav-bottom-li"></li>
        <li class="nav-bottom-li">
          <a href="javascript:;" @click="go('/strategy/1-1')">职业讲解</a>
          <a href="javascript:;" @click="go('/strategy/2-1')">技能介绍</a>
          <a href="javascript:;" @click="go('/strategy/3-1')">武器升级</a>
          <a href="javascript:;" @click="go('/strategy/4-1')">道具使用</a>
          <a href="javascript:;" @click="go('/strategy/5-1')">地图攻略</a>
        </li>
        <li class="nav-bottom-li"></li>
        <li class="nav-bottom-li">
          <a href="javascript:;">完整客户端</a>
          <a href="javascript:;">微端下载</a>
          <a href="javascript:;">登录器下载</a>
        </li>
      </ul>
    </div>
  </nav>
  <hr style="position: relative;top: 80px;border: 1px solid rgba(255, 255, 255, 0.5);z-index: 10;" />

  <main>
    <RouterView />
  </main>
  <footer>
    <officialMedia></officialMedia>
    <gfooter></gfooter>
  </footer>
</template>

<script>
import officialMedia from '@/components/official-media.vue';
import gfooter from '@/components/g-footer.vue';
import { ElLoading } from 'element-plus'

export default {
  components: { officialMedia, gfooter },
  mounted() {
    setTimeout(() => {
      this.loadingInstance.close();
    }, 1500);
  },
  data() {
    return {
      loadingInstance: ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(225, 225, 225, 1)',
      }),
    }
  },
  methods: {
    go(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.icon {
  width: 80px;
  height: 80px;
  background-image: url('./assets/imgs/backgrounds/icon.png');
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  flex-shrink: 0;
}

nav {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: .5s;
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, .88) 0%,
      rgba(0, 0, 0, .98) 33%,
      rgba(0, 0, 0, .68) 90%,
      rgba(0, 0, 0, 0) 100%);
  z-index: 10;
}

.nav-top,
.nav-bottom-ul {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-shrink: 0;
}

.nav-bottom-ul {
  height: 240px;
  margin-top: 15px;
}

.nav-bottom {
  width: 100%;
  height: 240px;
}

nav:hover {
  height: 320px;
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, .88) 0%,
      rgba(0, 0, 0, .98) 20%,
      rgba(0, 0, 0, .68) 66%,
      rgba(0, 0, 0, 0) 100%);
}

.router-li {
  width: 150px;
  height: 80px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  list-style: none;
  color: rgb(225, 225, 225);
}

.nav-bottom-li {
  width: 150px;
  height: auto;
  border-left: 1px solid rgb(181, 135, 24);
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-bottom-li a {
  height: 30px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 20px;
  color: rgb(242, 194, 111);
}

.router-li:hover,
.nav-bottom-li a:hover {
  color: rgb(202, 108, 20);
}

.nav-bottom-li a:hover {
  border-bottom: 1px solid rgb(181, 135, 24);
}

.router-link-active {
  color: rgb(253, 240, 165);
  height: 60px;
  position: relative;
  top: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
}
</style>
