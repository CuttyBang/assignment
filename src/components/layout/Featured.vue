<template lang="html">
  <div class="featured">
    <FeaturedHeading :size="headingSize" :headingContent="headingContent" class="featured__header"/>
    <FeaturedImage :imgUrl="imgUrl" class="featured__image"/>
    <FeaturedHeading :size="headingSize" :headingContent="brandName" class="featured__brandName"/>
    <div class="featured__description">
      <TextBlock :textContent="textContent" class="featured__text"/>
      <FeaturedHeading :headingContent="featuredCarouselTitle" class="featured__carouselHeading plarge"/>
      <Carousel />
      <div class="carousel__info">
        <TextBlock :textContent="productTitle"/>
      </div>
      <ButtonBar :buttonText="btnText" class="btnMd secondary"/>
      <div class="featured__link">
        <a href="#">See All Brands</a>
      </div>
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
      brandName: 'Name of Brand',
      imgUrl: 'https://via.placeholder.com/250x250',
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
}

.featured__image {
  margin: 0 auto;
  width: 100%;
  display: block;
}

.featured__button {
  color: #fff;
  background: $tan;
}

.featured__text,
.featured__header {
  color: $brown;
  width: 80%;
  text-align: center;
  margin: 0 auto;
}

.featured__header {
  font-weight: 100;
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
  font-weight: 100;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  text-align: center;
}

.featured__carouselHeading {
  font-weight: 100;
  text-align: center;
  color: $brown;
  margin-top: 20px;
  margin-bottom: 20px;
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
</style>
