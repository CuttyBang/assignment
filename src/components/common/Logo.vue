<template lang="html">
    <img v-if="alternate" src="../../assets/ayla_logo_dk.png" alt="">
    <img v-else src="../../assets/ayla_logo.png" alt="">
</template>

<script>
export default {
  name: 'logo',
  props: ['version'],
  data(){
    return {

    }
  },
  computed: {
    alternate(){
      if(this.version == 'light'){
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
