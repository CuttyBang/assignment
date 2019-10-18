<template lang="html">
  <div class="noteworthy">
    <div class="noteworthy__mobileLayout">
      <Headline :size="headingSizeM" :headingContent="heading" class="noteworthy__heading"/>
      <TextBlock :textContent="textContent" class="noteworthy__text"/>
      <Carousel :noteworthySlides="noteSlides" />
    </div>
    <div class="noteworthy__desktopLayout">
      <div class="noteworthy__headingContent--desktop">
        <Headline :size="headingSizeD" :headingContent="heading" class="noteworthy__heading"/>
        <TextBlock :textContent="textContent" class="noteworthy__text"/>
      </div>
      <div class="noteworthy__imageContent--desktop">
        <Carousel v-for="(slide, index) in 3" :noteworthySlides="noteSlides" :key="index"/>
      </div>
    </div>
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
      headingSizeM: 'small',
      headingSizeD: 'large'
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

.noteworthy__mobileLayout {
  display: block;
  width: 100%;
  @include for-tablet-landscape-up {
    width: 0;
    display: none;
  }
}

.noteworthy__desktopLayout {
  .noteworthy__headingContent--desktop {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .noteworthy__heading, .noteworthy__text {
    width: 50%;
    text-align: left;
  }
  .noteworthy__heading {
    //margin-bottom: 0;
  }
  .noteworthy__imageContent--desktop {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 50px;
  }

}
.noteworthy__desktopLayout {
  display: none;
  width: 0;
  @include for-tablet-landscape-up {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}


</style>
