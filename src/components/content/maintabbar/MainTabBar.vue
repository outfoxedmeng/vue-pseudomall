<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt />
      <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-actived" alt />
      <div slot="text">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="item-icon" alt />
      <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-actived" alt />
      <div slot="text">Category</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" alt />
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-actived" alt />
      <div slot="text">Cart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="item-icon" alt />
      <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-actived" alt />
      <div slot="text">Profile</div>
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