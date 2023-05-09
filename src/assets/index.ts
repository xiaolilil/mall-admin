import Vue from 'vue'
// import type { Component } from 'vue' 
import SvgIcon from '@/components/SvgIcon/index.vue'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = (requireContext:any) => requireContext.keys().map(requireContext)
const req = import.meta.glob('./svg')
requireAll(req)
