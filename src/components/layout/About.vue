<template lang="html">
  <div class="about">
    <AboutImage />
    <div style="display: flex; justify-content: center; align-items: center"  class="inlineImage">
      <img style="width: 100%;" src="https://via.placeholder.com/250x250" alt="">
    </div>
    <div class="about__textContent">
      <Heading :headingContent="heading" :size="headingSize" class="about__heading" />
      <TextBlock :textContent="text" class="about__text"/>
      <AboutButton :buttonText="button" class="about__button"/>
    </div>
  </div>
</template>

<script>
import AboutImage from '../common/Image.vue'
import Heading from '../common/Heading.vue'
import TextBlock from '../common/TextBlock.vue'
import AboutButton from '../common/Button.vue'
export default {
  name: 'about',
  components: {
    AboutImage,
    Heading,
    TextBlock,
    AboutButton
  },
  data() {
    return {
      headingSize: 'small',
      heading: 'About',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      button: 'Know More'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  background: $brown;
}

.about__image {
  width: 100%;
  height: auto;
}

.about__textContent {
  width: 80%;
  margin: 0 auto;
  margin-top: 25px;
}

.about__heading,
.about__text {
  color: #fff;

}

.about__text {
  width: 80%;
  text-align: center;
}

.about__button {
  background: $tan;
  color: #fff;
}

</style>
