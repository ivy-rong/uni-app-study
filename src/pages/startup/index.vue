<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
onLoad(() => {
  setTimeout(() => {
    uni.redirectTo({
      url: '/pages/index/index'
    })
    console.log('222222')
  }, 1000)
})

// #ifdef MP-WEIXIN
console.log('11111')
// #endif
</script>
<template>startup</template>
