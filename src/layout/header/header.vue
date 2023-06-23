<template>
  <div class="header">
    <div class="header-left">
      <div class="menu-control">
        <i
          v-if="!user.isCollapse"
          @click="changeCollapse(true)"
          class="iconfont icon-zhedie1"
        ></i>
        <i
          v-else
          @click="changeCollapse(false)"
          class="iconfont icon-zhankai"
        ></i>
      </div>

      <bread-crumb />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BreadCrumb from '../breadcrumb/breadcrumb.vue'
import usePinia from '@/store'

const { user } = usePinia()
const changeCollapse = (bol: boolean) => {
  user.setCollapse(bol)
}
</script>

<style lang="scss" scoped>
.header {
  height: 45px;
  padding: 0 15px;
  .header-left {
    display: flex;
    align-items: center;
    .menu-control {
      margin-right: 10px;
    }
  }
  .iconfont {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
