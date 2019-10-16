<template lang="html">
  <div class="cart__counter">
    <span class="count">3</span>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cart__counter {
  margin-left: 10px;
  margin-right: 10px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: $blue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.count {
  color: $brown;
  font-size: 12px;
}
</style>
