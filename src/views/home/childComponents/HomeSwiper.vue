<template>
  <div>
    <swiper>
      <swiper-item v-for="banner in banners" :key="banner.image">
        <img :src="banner.image" alt />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped>
</style>