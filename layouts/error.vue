<template>
  <div class="error__container">
    <NuxtLink class="site-title" :to="localePath('/')"
      >Cyril<br /><span>Lajarge</span></NuxtLink
    >
    <h2 class="error-code">{{ error.statusCode }}</h2>
    <h2 class="error-msg">{{ $t('error-page-msg') }}</h2>
    <MoreButton class="home-btn" :link="localePath('/')">{{
      $t('back-home')
    }}</MoreButton>
  </div>
</template>

<script>
import MoreButton from '@/components/MoreButton'

export default {
  components: {
    MoreButton,
  },
  layout: 'weird',
  props: ['error'],
}
</script>

<style lang="scss">
.error__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  .site-title {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 30px;
    color: var(--primary);
    font-family: 'Roboto';
    font-weight: 300;
    text-align: center;
    margin-bottom: 50px;

    span {
      font-family: 'Roboto';
      font-weight: 900;
    }
  }

  .error-code {
    color: var(--primary);
    font-size: 50px;
    font-weight: 900;
    margin: 0;
  }

  .error-msg {
    color: var(--primary);
    font-size: 20px;
    font-weight: 300;
    margin: 0;
  }

  .home-btn {
    margin-top: 50px;
  }
}
</style>
