<template lang="html">
  <div class="siteImage nathan">

  </div>
  <!-- <img src="https://via.placeholder.com/250x250" alt=""> -->
</template>

<script>
export default {
  name: 'site-image',
  props: ['imgHeight'],

}
</script>

<style lang="scss" scoped>
.siteImage{
  background: url('https://via.placeholder.com/250x250');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

</style>
