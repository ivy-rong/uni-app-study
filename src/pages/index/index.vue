<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    />
    <view class="linkName">
      <text @click="linkTo('/pages/list/index')">list</text>
      <text @click="linkTo('/pages/login/index')">login</text>
      <text @click="linkTo('/pages/startup/index')">startup</text>
    </view>
    <view style="padding: 20px">
      <!-- 以下形式在微信小程序会无效，APP和H5有效  -->
      <u-button
        type="primary"
        :plain="true"
        text="镂空"
        @click="showToast"
      ></u-button>
      <u-button
        type="primary"
        :plain="true"
        :hairline="true"
        text="细边"
      ></u-button>
      <u-button
        type="primary"
        :disabled="disabled"
        text="禁用"
      ></u-button>
      <u-button
        type="primary"
        loading
        loadingText="加载中"
      ></u-button>
      <u-button
        type="primary"
        icon="map"
        text="图标按钮"
      ></u-button>

      <u-toast ref="uToastRef"></u-toast>
      <text>{{ counterStore.count }}</text>
      <u-button
        text="++1"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
        @click="counterStore.increment"
      ></u-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ToastRef } from 'uview-plus'
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
const uToastRef = ref<ToastRef | null>(null)
const disabled = ref(true)
const showToast = () => {
  uToastRef.value!.show({
    type: 'loading',
    title: '正在加载',
    message: '正在加载',
    iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png',
    complete() {
      // params.url &&
      //   uni.navigateTo({
      //     url: params.url
      //   })
    }
  })
}
function linkTo(link: string) {
  if (link === '/pages/list/index') {
    uni.switchTab({
      url: link
    })
  } else {
    uni.navigateTo({
      url: link
    })
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}
.linkName {
  display: inline-flex;
  flex-direction: column;
}
</style>
