<template>
  <div class="layout">
    <Menu></Menu>
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
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
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
