<template lang="html">
  <div class="about">
    <div class="about__mobileLayout">
      <!-- <AboutImage class="about__image--headerImage"/> -->
      <div style="display: flex; justify-content: center; align-items: center"  class="inlineImage">
        <img style="width: 100%;" src="https://via.placeholder.com/250x250" alt="">
      </div>
      <div class="about__content">
        <div class="about__content--textContent">
          <Heading :headingContent="heading" :size="headingSize" class="about__heading" />
          <TextBlock  :textContent="text" class="about__text"/>
        </div>
        <div class="about__content--btnBlock">
          <AboutButton :buttonText="button" class="about__button btn secondary"/>
        </div>
      </div>
    </div>

    <div class="about__desktopLayout">
      <!-- <AboutImage class="about__image--headerImage"/> -->
      <div class="about__inlineImage">
        <img style="width: 100%;" src="https://via.placeholder.com/250x250" alt="">
      </div>
      <div class="about__content">
        <div class="about__content--textContent">
          <Heading :headingContent="heading" :size="headingSize" class="about__heading" />
          <TextBlock  :textContent="text" class="about__text"/>
        </div>
        <div class="about__content--btnBlock">
          <AboutButton :buttonText="button" class="about__button btn secondary"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import AboutImage from '../common/Image.vue'
import Heading from '../common/Heading.vue'
import TextBlock from '../common/TextBlock.vue'
import AboutButton from '../common/Button.vue'
export default {
  name: 'about',
  components: {
    // AboutImage,
    Heading,
    TextBlock,
    AboutButton
  },
  data() {
    return {
      headingSize: 'small',
      heading: 'About Ayla',
      imgUrl: '../../assets/about.png',
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

.about__mobileLayout {
  .about__image {
    width: 100%;
    height: auto;

  }

  .about__content {
    width: 80%;
    margin: 0 auto;
    margin-top: 25px;
    padding-bottom: 50px;
  }

  .about__heading,
  .about__text {
    color: #fff;
  }



  .about__content--btnBlock {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about__button {
    margin: 0 auto;
    background: $tan;
    color: #fff;
    margin-top: 20px;
  }
}

.about__desktopLayout {
    width: 100%;
    height: auto;


  .about__inlineImage {
    width: 50%;
    height: auto;

  }

  .about__content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .about__content--textContent {
    width: 50%;
  }

  .about__heading,
  .about__text {
    color: #fff;
  }

  .about__content--btnBlock {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about__button {
    margin: 100px auto 0;
    background: $tan;
    color: #fff;
    margin-top: 20px;
  }
}



.about__mobileLayout {
  display: block;
  @include for-tablet-landscape-up {
    display: none;
  }
}

.about__desktopLayout {
  display: none;
  @include for-tablet-landscape-up {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

</style>
