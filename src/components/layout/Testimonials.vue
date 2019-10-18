<template lang="html">
  <div class="testimonial">
    <div class="testimonial__mobileLayout">
      <div class="testimonial__content">
        <Carousel class="testimonial__carousel"/>
        <TextBlock :textContent="text" class="testimonial__text h2"/>
        <TextBlock :textContent="testiName" class="testimonial__name"/>
      </div>
    </div>
    <div class="testimonial__desktopLayout">

        <div class="testimonial__contentBlock">
          <span>&#706;</span>
          <div class="testimonial__content">
            <TextBlock :textContent="text" class="testimonial__text h2"/>
            <TextBlock :textContent="testiName" class="testimonial__name"/>
          </div>
        </div>
        <div class="testimonial__carouselBlock">
          <Carousel class="testimonial__carousel"/>
          <span>&#707;</span>
        </div>
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
  @include for-tablet-landscape-up {
    width: calc(100% - 180px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;
  }
}

.testimonial__mobileLayout {
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
}

.testimonial__desktopLayout {
  height: 500px;
  span {
    font-size: 25px;
    font-weight: 100;
    cursor: pointer;
    margin-left: 20px;
  }
  .testimonial__contentBlock {
    width: 50%;
    height: 100%;
    span {
      font-size: 25px;
      font-weight: 100;
      cursor: pointer;
      margin-left: 20px;
    }
  }

  .testimonial__carouselBlock {
    width: 50%;
    height: 100%;
  }

  .testimonial__contentBlock,
  .testimonial__content,
  .testimonial__carouselBlock,
  .testimonial__carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .testimonial__content {
    width: 75%;
    flex-direction: column;
  }

  .testimonial__text,
  .testimonial__name {
    color: $brown;
    width: 80%;
    text-align: center;
    font-weight: 400;
  }


  .testimonial__carousel {
    height: 75%;
    flex-direction: column;
    .carousel img {
      height: 80%;
    }
  }
}



.testimonial__mobileLayout {
  display: block;
  @include for-tablet-landscape-up {
    display: none;
  }
}

.testimonial__desktopLayout {
  display: none;
  @include for-tablet-landscape-up {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
