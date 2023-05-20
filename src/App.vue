<template>
  <el-config-provider :locale="currLocale">
    <router-view />
    <!-- {{$t('common.login')}} -->
  </el-config-provider>
</template>

<script setup lang="ts">
import { useLanguage } from '@/hooks/useLanguage'

const { currLocale } = useLanguage()
</script>

<style scoped></style>
