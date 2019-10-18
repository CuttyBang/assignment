<template lang="html">
  <div class="carousel">
    <img src="https://via.placeholder.com/190x190" alt="">
    <p class="plarge carousel__text">Slide Title</p>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: ['images'],
  data() {
    return {
      products: {}
        }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: auto;
  img {
    margin: auto;
    display: block;
  }
}

.carousel__text {
  margin: 0;
  font-weight: 100;
  margin-top: 20px;
  text-align: center;
  color: $brown;
}
</style>
