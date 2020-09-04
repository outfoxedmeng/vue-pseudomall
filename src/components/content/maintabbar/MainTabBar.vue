<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="image" alt />
      <div slot="text">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="image" alt />
      <div slot="text">Category</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>