<template lang="html">
  <div class="featured">
    <div class="featured__mobileLayout">
      <FeaturedHeading :size="headingSize" :headingContent="headingContent" class="featured__header"/>
      <FeaturedImage :imgUrl="imgUrl" class="featured__image"/>
      <FeaturedHeading :size="headingSize" :headingContent="brandName" class="featured__brandName"/>
      <div class="featured__description">
        <TextBlock :textContent="textContent" class="featured__text"/>
        <FeaturedHeading :headingContent="featuredCarouselTitle" class="featured__carouselHeading plarge"/>
        <Carousel />
        <ButtonBar :buttonText="btnText" class="btnMd secondary featured__buttonBar"/>
        <div class="featured__link">
          <a href="#">See All Brands</a>
        </div>
      </div>
    </div>
    <div class="featured__desktopLayout">
      <div class="featured__desktopContent--top">

        <div class="featured__contentBlock--left">
          <FeaturedImage :imgUrl="imgUrl" class="featured__image"/>
        </div>

        <div class="featured__contentBlock--right">
          <div class="featured__contentWrapper--right">
            <FeaturedHeading :size="headingSize" :headingContent="headingContent" class="featured__header"/>
            <FeaturedHeading :size="headingSize" :headingContent="brandName" class="featured__brandName"/>
            <TextBlock :textContent="textContent" class="featured__text"/>
          </div>
        </div>

      </div>
      <div class="featured__desktopContent--bottom">
        <div class="featured__spotlightProducts">
          <FeaturedHeading :headingContent="featuredCarouselTitle" class="featured__carouselHeading plarge"/>
          <div class="featured__carousel--desktop">
            <Carousel v-for="(slide, index) in 4" class="featured__carousel" :key="index"/>
          </div>
        </div>
        <div class="featured__buttons">
          <ButtonBar :buttonText="btnText" class="btnMd secondary"/>
          <div class="featured__link">
            <a href="#">See All Brands</a>
          </div>
        </div>
      </div>
      <!-- <div class="featured__description">
        <FeaturedHeading :headingContent="featuredCarouselTitle" class="featured__carouselHeading plarge"/>
        <Carousel />
        <ButtonBar :buttonText="btnText" class="btnMd secondary"/>
        <div class="featured__link">
          <a href="#">See All Brands</a>
        </div>
      </div> -->
    </div>

  </div>
</template>

<script>
import FeaturedHeading from '../common/Heading.vue'
import FeaturedImage from '../common/Image.vue'
import TextBlock from '../common/TextBlock.vue'
import Carousel from '../common/Carousel.vue'
import ButtonBar from '../common/Button.vue'
export default {
  name: 'featured',
  components: {
    FeaturedHeading,
    FeaturedImage ,
    TextBlock,
    Carousel,
    ButtonBar
  },
  data() {
    return {
      featuredCarouselTitle: 'MyHavtron Products',
      headingContent: 'Featured Brand',
      brandName: 'MyHavtron',
      imgUrl: 'https://via.placeholder.com/250x250',
      imgUrlD: 'https://via.placeholder.com/190x190',
      textContent: "MyHavtorn is a small company from Sweden's Bollebygd Valley that has sustainably grown and harvested its own sea buckthorn for the past 100 years. To avoid irritating preservatives, MyHavtorn freshly makes their sea buckthorn oil just for us. Their vitamin- and EFA-rich products work wonders on sensitive skin & rosacea.",
      btnText: 'See All Myhavtron products',
      btnClass: 'featured__button',
      headingSize: 'small',
      productTitle: 'Product Title'
    }
  }
}
</script>

<style lang="scss" scoped>
.featured {
  background: $blue;
  padding: 20px 0;
  width: 100%;
  @include for-tablet-landscape-up {
    padding: 0;
  }
}

.featured__mobileLayout {
  .featured__image {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    display: block;
  }

  .featured__button {
    color: #fff;
    background: $tan;
  }

  .featured__text,
  .featured__header,
  .featured__brandName,
  .featured__carouselHeading {
    color: $brown;
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }

  .featured__header {
    font-weight: 400;
    margin-bottom: 20px;
  }

  .featured__description {
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid $brown;
    padding: 20px 0;
    text-align: center;

  }

  .featured__brandName {
    margin: 0 auto;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    text-align: center;
  }

  .featured__carouselHeading {
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .featured__buttonBar {
    margin-top: 40px;
  }

  .featured__button {
    margin: 0 auto;
  }

  .featured__link {
    text-align: center;
    color: $green;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

.featured__desktopLayout {
  .featured__desktopContent--top,
  .featured__contentBlock--right {
    display: flex;
    align-items: center;
  }

  .featured__desktopContent--top {
    width: 100%;
    height: 473px;
    justify-content: flex-start;
  }

  .featured__contentBlock--left,
  .featured__contentBlock--right {
    width: 50%;
  }

  .featured__contentBlock--right {
    justify-content: center;
  }

  .featured__image {
    height: 100%;
    width: 100%;
    max-height: 473px;
    margin-top: 5px;
  }

  .featured__contentWrapper--right {
    width: 50%;
  }

  .featured__header,
  .featured__brandName,
  .featured__text {
    color: $brown;
  }

  .featured__header,
  .featured__brandName, {
    font-weight: 400;
    margin-bottom: 20px;
  }

  .featured__text {
    padding-top: 20px;
    border-top: 1px solid $brown;
  }

  .featured__desktopContent--bottom {
    width: 100%;
    height: 526px;
  }

  .featured__spotlightProducts {
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
  }

  .featured__carouselHeading {
    color: $brown;
  }

  .featured__carousel--desktop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  .featured__carousel {
    width: 190px;
    height: 190px;
    background: #999;
  }

  .carousel img {

  }

  .featured__buttons {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .featured__link {
    margin-left: 25px;
  }

}

.featured__mobileLayout {
  display: block;
  @include for-tablet-landscape-up {
    display: none;
  }
}

.featured__desktopLayout {
  display: none;
  @include for-tablet-landscape-up {
    display: block;
  }
}


</style>
