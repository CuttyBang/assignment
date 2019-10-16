<template lang="html">
  <div class="instagram">
    <InstaHeading :headingContent="instaHeading" class="instagram__heading h2"/>
    <Carousel :images="instaFeed"/>
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
</style>
