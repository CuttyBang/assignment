<template lang="html">
  <div class="formComponent">
    <TextBlock :textContent="titleContent" class="formComponent__header plarge"/>
    <form class="formComponent__form" action="index.html" method="post">
      <input class="formComponent__textInput" type="text" name="textInput" :placeholder="placeholderContent">
      <input v-on:submit.prevent class="formComponent__submit btn secondary" type="submit" name="submit" value="Subscribe">
    </form>
  </div>
</template>

<script>
import TextBlock from './TextBlock.vue'
export default {
  name: 'form-component',
  components: {
    TextBlock
  },
  props: ['titleContent', 'placeholderContent'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

.formComponent {
  padding-top: 25px;
  &__header {
    color: #fff;
    text-align: center;
  }
  &__form {
    display: flex;
    justify-content: space-around;
    align-items: center;

  }

  &__textInput {
    border: 1px solid #fff;
    background: $brown;
    color: #fff;
    padding: 0;
    height: 42px;
    width: calc(100% - 52px);
    padding-left: 10px;
  }
  &__textInput::placeholder {
    color: #fff;
  }
  &__submit{
    cursor: pointer;
    border: 1px solid #C9BE9E;
    height: 44px
  }

  @include for-tablet-landscape-up {
    &__header {
      text-align: left;
    }
  }
}


</style>
