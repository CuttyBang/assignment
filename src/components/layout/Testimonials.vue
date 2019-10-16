<template lang="html">
  <div class="testimonial">
    <Carousel />
    <TextBlock :textContent="text" class="testimonial__text h2"/>
    <TextBlock :textContent="testiName" class="testimonial__name"/>

  </div>
</template>

<script>
import Carousel from '../common/Carousel.vue'
import TextBlock from '../common/TextBlock.vue'

export default {
  name: 'testimonial',
  components: {
    Carousel,
    TextBlock
  },
  data() {
    return {
      text: '“Awesome. It already healed a red pimple scar on my chin”',
      testiName: 'Sarita'
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonial {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testimonial__text,
.testimonial__name {
  color: $brown;
  width: 80%;
  text-align: center;
}

.testimonial__text {
  font-weight: 100;
}
</style>
