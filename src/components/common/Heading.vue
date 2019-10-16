<template lang="html">
  <h2 v-if="secondary">{{ headingContent }}</h2>
  <h1 v-else>{{ headingContent }}</h1>
</template>

<script>
export default {
  name: 'heading-block',
  props: ['headingContent', 'size'],
  computed: {
    secondary() {
      if (this.size == 'small') {
        return true;
      }
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
