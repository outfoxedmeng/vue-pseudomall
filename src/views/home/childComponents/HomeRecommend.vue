<template>
  <div class="home-recommend">
    <div v-for="recommend in recommends" :key="recommend.link" class="home-recommend-item">
      <img :src="recommend.image" />
      <div>{{recommend.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped>
.home-recommend {
  display: flex;
  width: 100%;
  text-align: center;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.home-recommend-item {
  flex: 1;
}

.home-recommend img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
