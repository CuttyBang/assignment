<template lang="html">
  <div class="noteworthy">
    <Headline :size="headingSize" :headingContent="heading" class="noteworthy__heading"/>
    <TextBlock :textContent="textContent" class="noteworthy__text"/>
    <Carousel :noteworthySlides="noteSlides" />
  </div>
</template>

<script>
import Headline from '../common/Heading.vue'
import TextBlock from '../common/TextBlock.vue'
import Carousel from '../common/Carousel.vue'
export default {
  name: 'noteworthy',
  components: {
    Headline,
    TextBlock,
    Carousel
  },
  data() {
    return {
      heading: "What's Noteworthy",
      textContent: "Specially Crafted for You",
      noteSlides: {},
      headingSize: 'small'
    }
  }
}
</script>

<style lang="scss" scoped>
.noteworthy {
  padding: 20px 0;
}

.noteworthy__heading,
.noteworthy__text {
  text-align: center;
  color: $brown;
}

.noteworthy__heading {
  font-weight: 400;
}
</style>
