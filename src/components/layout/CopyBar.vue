<template lang="html">
  <div class="copyBar">

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .copyBar {
    display: none;
    @include for-tablet-landscape-up {
      display: block;
      width: 100%;
      height: 57px;
      background: darken($brown, 5%);
    }
  }
</style>
