<template>
  <div class="nav-bar">
    <slot name="left" />
    <slot name="center" />
    <slot name="right" />
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
</style>