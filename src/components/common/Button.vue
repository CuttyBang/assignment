<template lang="html">
    <input class="button" type="button" @click.prevent :class="buttonClass" :value="buttonText"/>
</template>

<script>
export default {
  name: 'button-component',
  props: ['buttonText', 'buttonClass']
}
</script>

<style lang="scss" scoped>

</style>
