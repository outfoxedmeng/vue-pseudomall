<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div class="item-img">
      <slot name="image"></slot>
    </div>
    <div class="item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  methods: {
    itemClick() {
      this.$router.replace("/home").catch((err)=>{});
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item .item-img img {
  height: 24px;
  width: 24px;
}
</style>