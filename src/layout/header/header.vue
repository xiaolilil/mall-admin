<template>
  <div class="header">
    <div class="menu-control">
      <i
        v-if="user.isCollapse"
        @click="changeCollapse(false)"
        class="iconfont icon-zhedie1"
      ></i>
      <i v-else @click="changeCollapse(true)" class="iconfont icon-zhankai"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import usePinia from '@/store'

const { user } = usePinia()
const changeCollapse = (bol: boolean) => {
  user.setCollapse(bol)
}
</script>

<style lang="scss" scoped>
.header {
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .iconfont {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
