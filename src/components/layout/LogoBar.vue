<template lang="html">
  <div class="logobar">
    <Headline :headingContent="headlineText" :size="small" class="logobar__heading"/>
    <!-- <Logo v-for="(logo, index) in logos" :imgSrc="logo" :key="index" class="logobar__logo"/> -->
    <div class="logobar__logos">
      <img class="logobar__logo" src="../../assets/_nytimes2.png" alt="">
      <img class="logobar__logo" src="../../assets/_allure.png" alt="">
      <img class="logobar__logo" src="../../assets/_goop.png" alt="">
      <img class="logobar__logo" src="../../assets/_wallpaper2.png" alt="">
    </div>
  </div>
</template>

<script>
import Headline from '../common/Heading.vue'
export default {
  name: 'logo-bar',
  components: {
    Headline
  },
  data() {
    return {
      logos: ['../../assets/nytimes.png', '../../assets/allure.png', '../../assets/goop.png', '../../assets/wallpaper.png'],
      headlineText: 'As Seen In'
    }
  }
}
</script>

<style lang="scss" scoped>
.logobar {
  width: 100%;
  height: 340px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid $blue;
  @include for-tablet-landscape-up {
    height: 225px;
  }
}

.logobar__logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include for-tablet-landscape-up {
    width: 80%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: center;
  }
}

.logobar__heading {
  color: $brown;
  text-align: center;
}

.logobar__logo {
  margin: 10px;
  width: 80%;
  height: auto;
  @include for-tablet-landscape-up {
    width: 20%;
  }
}
</style>
