<template>
  <div class="footer-container">
    <div class="social-container">
      <a
        href="https://www.linkedin.com/in/cyril-lajarge-b239a9101/"
        class="social-image-container"
      >
        <img src="@/static/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/cyrillajarge" class="social-image-container">
        <img src="@/static/github.svg" alt="Github" />
      </a>
      <a href="mailto:cyril.lajarge@gmail.com" class="social-image-container">
        <img src="@/static/email.svg" alt="Email" />
      </a>
    </div>
    <div class="copyright-container">
      <p>Copyright © Cyril LAJARGE | {{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer-container {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--bg);

  .social-container {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .social-image-container {
      margin: 0 20px;
      height: 40px;
      width: 40px;
      border-radius: 90px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover img {
        transform: scale(1.4);
      }

      img {
        height: 50%;
        width: 50%;
        filter: var(--filter);
        transition: transform 500ms;
      }
    }
  }

  .copyright-container {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: 'Roboto Light';
      font-size: 15px;
      color: var(--primary);
    }
  }
}
</style>
