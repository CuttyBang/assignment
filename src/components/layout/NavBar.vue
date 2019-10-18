<template lang="html">
  <div class="navigation">

    <div class="navigation__mobileLayout">
      <div class="navigation__left">
          <Hamburger class="navigation__icon--hamburger"/>
          <Search class="navigation__icon--search"/>
      </div>
      <div class="navigation__center">
        <div class="navigation__logo">
            <Logo :version="logoVersion"/>
        </div>
      </div>
      <div class="navigation__right">
        <Bag />
        <CartCounter class="navigation__cartCount"/>
      </div>
    </div>

    <div class="navigation__desktopLayout">

      <div class="navigation__left">
        <div class="navigation__logo">
            <Logo :version="logoVersion"/>
        </div>
      </div>

      <div class="navigation__center">
        <TextBlock v-for="(item, index) in menuItems" :key="index" :textContent="item" class="navigation__menuItem"/>
        <Search class="navigation__icon--search"/>
      </div>

      <div class="navigation__right">
        <Bag />
        <CartCounter class="navigation__cartCount"/>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from '../common/Logo.vue'
import Hamburger from '../icons/hamburger.vue'
import Search from '../icons/search.vue'
import Bag from '../icons/bag.vue'
import CartCounter from '../common/CartCounter.vue'
import TextBlock from '../common/TextBlock.vue'
export default {
  name: 'navigation',
  components: {
    Logo,
    Hamburger,
    Search,
    Bag,
    CartCounter,
    TextBlock
  },
  data() {
    return {
      logoVersion: 'dark',
      menuItems: ['Skin', 'Body', 'Color', 'Hair', 'Favorites', 'New', 'Gift']
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  height: 40px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  @include for-tablet-landscape-up {
    height: 86px;
  }
}

.navigation__mobileLayout {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .navigation__logo {
    width: 33%;
    height: 25px;
    img {
      width: 50px;
      height: auto;
    }
  }

  .navigation__left,
  .navigation__center,
  .navigation__right {
    width: 33%;
    display: flex;
    align-items: center;
  }

  .navigation__left {
    justify-content: flex-start;
  }

  .navigation__center {
    justify-content: center;
  }

  .navigation__right {
    justify-content: flex-end;
  }

  .navigation__leftIcons{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .navigation__icon--search {
    margin-left: 20px;
  }

  .navigation__icon--hamburger {
    margin-left: 10px;
  }
}
.navigation__mobileLayout {
  display: flex;
  justify-content: center;
  align-items: center;
  @include for-tablet-landscape-up {
    display: none;
  }
}

.navigation__desktopLayout {
  width: 100%;
  .navigation__left,
  .navigation__center,
  .navigation__right {
    width: 33%;
    display: flex;
    align-items: center;
  }

  .navigation__left {
    justify-content: flex-start;
  }

  .navigation__center {
    justify-content: space-between;
  }

  .navigation__right {
    justify-content: flex-end;
  }

  .navigation__logo {
    width: 100px;
    height: 52px;
    img {
      width: 100px;
      height: auto;
      margin: 0;
    }
  }

  .navigation__menuItem {
    font-weight: 100;
    color: $brown;
  }

}
.navigation__desktopLayout {
  display: none;
  @include for-tablet-landscape-up {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
