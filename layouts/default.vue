<template>
  <div class="main-container">
    <Header class="header" />
    <Nuxt class="content" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Roboto';
  background-color: var(--bg);
}

body {
  margin: 0;
}

a {
  outline: 0;
}

li {
  font-weight: 300;
}

strong {
  font-weight: 600;
}

.main-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;

  @include tablet-down {
    width: 100%;
  }

  .header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }

  .content {
    // min-height: calc(100vh - 114px - 150px);
    flex: 1;

    @include phone {
      width: 80%;
      margin: 0 auto;
    }

    @include tablet {
      width: 70%;
      margin: 0 auto;
    }
  }
}
</style>
