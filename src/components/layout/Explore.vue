<template lang="html">
  <div class="explore">
    <div class="explore__mobileLayout">
      <ExploreHeader :size="headingSize" :headingContent="headingText" class="explore__heading"/>
      <TextBlock :textContent="exploreText" class="explore__text"/>
        <Carousel class="explore__carousel"/>
    </div>
    <div class="explore__desktopLayout">
      <div class="explore__contentBlock">
        <div class="explore__desktopContent">
          <ExploreHeader :size="headingSize" :headingContent="headingText" class="explore__heading"/>
          <TextBlock :textContent="exploreText" class="explore__text"/>
        </div>
      </div>
      <div class="explore__carouselBlock">
        <Carousel v-for="(slide, index) in 3" :key="index" class="explore__carousel"/>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../common/Carousel.vue'
import ExploreHeader from '../common/Heading.vue'
import TextBlock from '../common/TextBlock'
export default {
  name: 'explore',
  components: {
    Carousel,
    ExploreHeader,
    TextBlock
  },
  data() {
    return {
      headingText: 'Explore More',
      headingSize: 'small',
      exploreText: 'Lorem ipsum dolor sit amet'
    }
  }
}
</script>

<style lang="scss" scoped>
.explore {
  @include for-tablet-landscape-up {
    padding: 25px 0;
    width: calc(100% - 180px);
    margin: 0 auto;
  }
}

.explore__mobileLayout {
  width: 100%;
  text-align: center;
  .explore__text {
    margin-top: 0;
    font-weight: 100;
    margin-bottom: 0;
  }

  .explore__heading {
    font-weight: 400;
    color: $brown;
    text-align: center;
    margin-bottom: 10px;
  }

  .explore__carousel {
    margin-top: 35px;
  }
}

.explore__desktopLayout {
  .explore__contentBlock {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .explore__desktopContent {
    width: 50%;
    text-align: left;
  }

  .explore__heading,
  .explore__text {
    color: $brown;
  }

  .explore__carouselBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    padding-right: 25px;
  }
}

.explore__mobileLayout {
  display: block;
  @include for-tablet-landscape-up {
    display: none;
  }
}

.explore__desktopLayout {
  display: none;
  @include for-tablet-landscape-up {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }
}
</style>
