<script setup lang="ts">
uni.setTabBarBadge({
  index: 1,
  text: '1 '
})

uni.showTabBar()
</script>
<template>
  <view>
    <view
      class="item"
      v-for="(item, index) in 10"
      :key="index"
      >{{ item }}</view
    >
  </view>
</template>

<style scoped lang="scss">
.item {
}
</style>
