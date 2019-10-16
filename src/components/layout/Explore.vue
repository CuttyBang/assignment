<template lang="html">
  <div class="explore">
    <ExploreHeader :size="headingSize" :headingContent="headingText" class="explore__heading"/>
    <TextBlock :textContent="exploreText" class="explore__text"/>
    <Carousel class="explore__carousel"/>
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
  width: 100%;
  text-align: center;
}

.explore__text {
  margin-top: 0;
  font-weight: 100;
  margin-bottom: 0;
}

.explore__heading {
  font-weight: 100;
  color: $brown;
  text-align: center;
  margin-bottom: 10px;
}

.explore__carousel {
  margin-top: 35px;
}
</style>
