<template lang="html">
  <div class="topbar">
    <TextBlock v-if="!switchOut" :textContent="text" class="topbar__text psmall topbar__text--message" />
    <div class="topbar_desktopButtons">
      <TextBlock :textContent="guide" class="topbar__text--inverted"/>
      <TextBlock :textContent="blog" class="topbar__text psmall topbar__text--link"/>
    </div>
  </div>
</template>

<script>
import TextBlock from '../common/TextBlock.vue'
export default {
  name: 'top-bar',
  components: {
    TextBlock
  },
  data() {
    return {
      text: 'Free, fast shipping on all orders over $35!',
      guide: 'Let Us Guide You',
      blog: 'Our Blog'
    }
  },
  computed: {
    switchOut(){
      window.onresize = function() {
        let width = window.innerWidth;
        if (width > 1200) return true;
      }
      return false
   }
 }
}
</script>

<style lang="scss" scoped>
.topbar {
  background: $brown;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 100%;
  @include for-desktop-up {
    height: 36px;
  }
}
.topbar__text {
  color: #fff;
  margin: 0;
  line-height: 1;
}

.topbar__text--link,
.topbar__text--inverted {
  display: flex;
  justify-content: center;
  align-items: center;
}

.topbar__text--link {
  width: 110px;
  height: 100%;
}

.topbar__text--inverted {
  color: $brown;
  background: $tan;
  width: 160px;
  height: 100%;
  text-align: center;
}

.topbar__text--message {
  @include for-desktop-up {
    text-align: left;
    width: calc(100vw - 270px;);
    margin-left: 46px;
  }
}

.topbar_desktopButtons {
  width: 270;
  height: 100%;
  display: none;
  @include for-desktop-up {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
