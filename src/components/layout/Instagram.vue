<template lang="html">
  <div class="instagram">
    <InstaHeading :headingContent="instaHeading" class="instagram__heading h2"/>
    <div class="instagram__carousel--mobile">
      <Carousel :images="instaFeed"/>
    </div>
    <div class="instagram__carousel--desktop">
      <span>&#706;</span>
      <Carousel v-for="(slide, index) in 4" :key="index" :images="instaFeed"/>
      <span>&#707;</span>
    </div>
  </div>
</template>

<script>
import InstaHeading from '../common/Heading.vue'
import Carousel from '../common/Carousel.vue'
export default {
  name: 'instagram',
  components: {
    InstaHeading,
    Carousel
  },
  data() {
    return {
      instaHeading: 'Our Insta Feed',
      instaFeed: {},

    }
  }
}
</script>

<style lang="scss" scoped>
.instagram {
  padding-top: 38px;
  padding-bottom: 62px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.instagram__heading {
  font-weight: $regular;
  margin-bottom: 29px;
  color: $brown;
}

.instagram__carousel {
  width: 100%;
  &--mobile {
    @include for-tablet-landscape-up {
      display: none;
    }
  }
  &--desktop {
    display: none;
    @include for-tablet-landscape-up {
      width: calc(100% - 180px);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    span {
      font-size: 40px;
      color: $brown;
    }
    .carousel {
      width: 250px;
      img {
        width: 250px;
        height: auto;
      }
    }
  }
}
</style>
