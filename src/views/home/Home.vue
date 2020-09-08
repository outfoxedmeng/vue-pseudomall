<template>
  <div class="home-nav">
    <nav-bar>
      <nav-bar-item slot="center" title="center"></nav-bar-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import NavBarItem from "components/common/navbar/NavBarItem";

import { getHomeMultiData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    NavBarItem,
  },
  data() {
    return {
      banners: [],
    };
  },
  created() {
    getHomeMultiData()
      .then((result) => {
        this.banners = result.data.banner.list
      })
      .catch((err) => {});
  },
};
</script>


<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>