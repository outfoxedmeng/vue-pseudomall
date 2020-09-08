<template>
  <div class="nav-bar-item">{{title}}</div>
</template>
<script>
export default {
  name: "NavBarItem",
  props: {
    title: {
      type: String,
    },
  },
};
</script>
<style scoped>
.nav-bar-item {
  flex: 1;
  text-align: center;
}
</style>