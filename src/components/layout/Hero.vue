<template lang="html">
  <div class="hero">

    <div class="hero__desktopContent">
      <div class="hero__contentBlock">
        <HeadingText :headingContent="heading" class="hero__headline h1"></HeadingText>
        <div class="hero__textBlock">
          <TextBlock :textContent="text" class="hero__text"/>
        </div>
        <div class="hero__buttonBlock">
          <Btn v-for="(button, index) in buttons" :buttonText="button" class="hero__button btn" :key="index"></Btn>
        </div>
      </div>
    </div>

    <div class="hero__mobileContent">

      <div class="hero__mobileContent--top">

        <div class="hero__headlineBlock">
          <HeadingText :headingContent="heading" class="hero__headline"></HeadingText>
        </div>

      </div>

      <div class="hero__mobileContent--bottom">

        <div class="hero__buttonBlock">
          <Btn v-for="(button, index) in buttons" :buttonText="button" class="hero__button btnMd" :key="index"></Btn>
        </div>

        <div class="hero__textBlock">
          <TextBlock :textContent="text" class="hero__text"/>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import HeadingText from '../common/Heading.vue'
import Btn from '../common/Button.vue'
import TextBlock from '../common/TextBlock.vue'
export default {
  name: 'hero',
  components: {
    HeadingText,
    Btn,
    TextBlock
  },
  data() {
    return {
      buttons: ['Shop Products', 'Consult Our Experts', 'Come , Meet Us'],
      heading: 'Lorem ipsum dolor sit amet,',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
}

.hero__headline {
  margin: 0;
  color: #fff;
  font-weight: 400;
  text-align: center;
  @include for-tablet-landscape-up {
    color: $brown;
    text-align: left;
  }
}

.hero__text {
  font-size: 17px;
  color: $brown;
  line-height: 1.4;
}

.hero__desktopContent {
  display: none;
  @include for-tablet-landscape-up {
    display: flex;
    background: url('../../assets/hero.jpg');
    background-size: cover;
    height: 670px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .hero__contentBlock {
    width: 80%;
    margin: 0 auto;
  }

  .hero__headline {
    width: 50%
  }

  .hero__text {
    width: 50%;
  }

  .hero__buttonBlock {
    position: absolute;
    bottom: 25px;
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .hero__button {
    @include for-tablet-landscape-up {
      width: 200px;
    }
    @include for-desktop-up {
      width: 248px;
    }
  }
}

.hero__mobileContent {
  display: block;


  .hero__mobileContent--top {
    height: 385px;
    width: 100%;
    background: url('../../assets/hero_mobile.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100vw auto;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .hero__headlineBlock {
    width: 75%;
  }

  .hero__headline {
    margin: 0;
    color: #fff;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
  }

  .hero__textBlock {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
  }

  .hero__text {
    font-size: 17px;
    color: $brown;
    line-height: 1.4;
  }

  .hero__mobileContent--bottom {
     width: calc(100% - 40px);
     margin: 0 auto;
    .hero__textBlock {
       margin-bottom: 20px;
    }

    .hero__text {
      font-size: 17px;
      color: $brown;
      line-height: 1.4;
    }

    .hero__buttonBlock {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }

    .hero__button {
      width: 335px;
      margin-top: 20px;

    }
  }

  @include for-tablet-landscape-up {
    display: none;
  }
}

</style>
