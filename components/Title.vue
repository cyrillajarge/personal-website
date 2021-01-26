<template>
  <h1 class="section-title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style lang="scss">
.section-title {
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 100px;

  @include tablet-down {
    margin-top: 70px;
    font-size: 30px;
    margin-bottom: 50px;
  }
}
</style>
