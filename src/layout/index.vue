<template>
  <div class="layout">
    <el-aside :width="user.isCollapse ? '60px' : '200px'">
      <Menu></Menu>
    </el-aside>
    <div class="right">
      <div class="top-bar">
        <Header />
        <TagsView />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './header/header.vue'
import Menu from './menu/menu.vue'
import TagsView from './tagsView/tagsView.vue'
import usePinia from '@/store'

const { user } = usePinia()
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  .el-aside {
    transition: width 0.2s linear;
  }
  .right {
    flex: 1;
    height: 100%;
    outline: 1px solid red;
    .top-bar {
      height: 80px;
      box-shadow: 0 3px 4px #e3e7eb;
    }
    .main {
      padding: 20px;
    }
  }
}
</style>
