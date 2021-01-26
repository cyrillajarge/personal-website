<template>
  <NuxtLink :to="link" class="more-button">
    <slot />
    <!-- <img src="@/static/right-arrow.svg" alt="Arrow" /> -->
  </NuxtLink>
</template>

<script>
export default {
  name: 'MoreButton',
  props: {
    link: String,
  },
}
</script>

<style lang="scss">
@keyframes slide {
  from {
    transform: translate(-100%, -50%);
  }
  to {
    transform: translate(0, -50%);
  }
}

.more-button {
  text-decoration: none;
  color: var(--primary);
  font-weight: 300;
  text-transform: uppercase;

  position: relative;
  display: flex;
  flex-direction: row;
  transition: font-weight 500ms;
  width: auto;
  padding-right: 20px;
  overflow: hidden;

  &:hover {
    &::before {
      visibility: visible;
      animation: 750ms linear infinite running slide;
    }
  }

  &::before {
    visibility: hidden;
    content: '';
    position: absolute;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    background-color: var(--primary);
    width: 98%;
    height: 3px;
  }

  &::after {
    content: '';
    position: absolute;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top-width: 6px;
    border-left: 8px solid var(--primary);
    border-bottom-width: 6px;
  }
}
</style>
