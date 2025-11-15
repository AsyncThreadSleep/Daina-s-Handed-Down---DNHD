<template>
    <div style="display: flex; flex-direction: row;margin-bottom: 50px;margin-top: 75px;">
        <el-menu :default-active="$route.path" class="custom-size-menu" :router="true">
            <el-menu-item index="/strategy/1-1">
                <span>职业讲解</span>
            </el-menu-item>

            <el-sub-menu index="2">
                <template #title>
                    <span>技能介绍</span>
                </template>
                <el-menu-item index="/strategy/2-1">
                    <img v-lazy="require('@/assets/ui/log/法师.png')" alt="" width="30px" height="30px"
                        style="margin-right: 5px;">
                    法师</el-menu-item>
                <el-menu-item index="/strategy/2-2">
                    <img v-lazy="require('@/assets/ui/log/战士.png')" alt="" width="30px" height="30px"
                        style="margin-right: 5px;">
                    战士</el-menu-item>
                <el-menu-item index="/strategy/2-3">
                    <img v-lazy="require('@/assets/ui/log/道士.png')" alt="" width="30px" height="30px"
                        style="margin-right: 5px;">
                    道士</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                    <span>武器升级</span>
                </template>
                <el-menu-item index="/strategy/3-1">法师</el-menu-item>
                <el-menu-item index="/strategy/3-2">战士</el-menu-item>
                <el-menu-item index="/strategy/3-3">道士</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
                <template #title>
                    <span>道具使用</span>
                </template>
                <el-menu-item index="/strategy/4-1">法师</el-menu-item>
                <el-menu-item index="/strategy/4-2">战士</el-menu-item>
                <el-menu-item index="/strategy/4-3">道士</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="5">
                <template #title>
                    <span>地图攻略</span>
                </template>
                <el-menu-item index="/strategy/5-1">法师</el-menu-item>
                <el-menu-item index="/strategy/5-2">战士</el-menu-item>
                <el-menu-item index="/strategy/5-3">道士</el-menu-item>
                <el-menu-item index="/strategy/5-4">战士</el-menu-item>
                <el-menu-item index="/strategy/5-5">战士</el-menu-item>
                <el-menu-item index="/strategy/5-6">道士</el-menu-item>
                <el-menu-item index="/strategy/5-7">法师</el-menu-item>
                <el-menu-item index="/strategy/5-8">战士</el-menu-item>
                <el-menu-item index="/strategy/5-9">道士</el-menu-item>
                <el-menu-item index="/strategy/5-10">道士</el-menu-item>
            </el-sub-menu>
        </el-menu>

        <div class="strategy-main-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { ElMenu, ElSubMenu, ElMenuItem } from 'element-plus';
export default {
    components: {
        ElMenu,
        ElSubMenu,
        ElMenuItem,
    }
}
</script>

<style scoped>
.custom-size-menu {
    --el-menu-icon-width: 50px;
    --el-menu-item-height: 80px;
    --el-menu-item-font-size: 32px;
    --el-menu-level-padding: 30px;
    --el-menu-base-level-padding: 30px;
    --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
}

::v-deep .el-icon svg {
    width: 32px;
    height: 32px;
}

.strategy-main-container {
    width: 1300px;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 25px;
}
</style>