<template lang="html">
  <div class="testimonial">
    <div class="testimonial__content">
      <Carousel class="testimonial__carousel"/>
      <TextBlock :textContent="text" class="testimonial__text h2"/>
      <TextBlock :textContent="testiName" class="testimonial__name"/>
    </div>
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
  padding-top: 50px;
  padding-bottom: 50px;
}

.testimonial__content {
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
  font-weight: 400;
}


</style>
