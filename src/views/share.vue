<template>
  <div>
    分享页面
  </div>
</template>
<script>
import { Shares } from '@/utils/share'
export default {
  data() {
    return {

    }
  },
  mounted() {
    let imgurl = 'http://jzptjk.csqx.org.cn/logo.png'
    let title = '测试分享'
    let desc = '测试自定义分享'
    let link = 'http://jzptwx.csqx.org.cn/share?&userid=' + 1 // ios分享链接不能带端口号 否则分享失效
    // console.log(imgurl, title, desc, link)
    Shares.shareCode(imgurl, title, desc, link, (status) => {
      if(status === 'success') {
        console.log('success')
      } else if(status === 'cancel') {
        console.log('error')
      }
    })
  }
}
</script>