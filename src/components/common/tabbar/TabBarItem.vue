<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div class="item-img">
      <slot name="image"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "/home",
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActived ? { color: "red" } : {};
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