<template lang="html">
  <div class="navigation">
    <div class="navigation__left">
      <div class="navigation__leftIcons">
        <Hamburger />
        <Search />
      </div>
    </div>
    <div class="navigation__center">
      <div class="navigation__logo">
          <Logo :version="logoVersion"/>
      </div>
    </div>
    <div class="navigation__right">
      <Bag />
    </div>
  </div>
</template>

<script>
import Logo from './common/Logo.vue'
import Hamburger from './icons/hamburger.vue'
import Search from './icons/search.vue'
import Bag from './icons/bag.vue'
export default {
  name: 'navigation',
  components: {
    Logo,
    Hamburger,
    Search,
    Bag
  },
  data() {
    return {
      logoVersion: '../assets/ayla_logo_dk.png'//'https://via.placeholder.com/90x25'`
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  display: flex;
  padding: 0;
  margin: 0;
}

.navigation__logo {
  width: 33%;
  height: 25px;
  img {
    width: 50px;
    height: auto;
    margin: 0;
  }
}

.navigation__leftIcons{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}


.navigation__left,
.navigation__center,
.navigation__right {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
