<template>
  <div class="project-container">
    <div class="project-header-container">
      <img :src="project.thumbnail.src" :alt="project.thumbnail.alt" />
      <div class="overlay"></div>
      <div class="header-content">
        <h1 class="project-title">{{ project.title }}</h1>
        <a class="github" :href="project.github">
          <img src="/github.svg" alt="Github" />
        </a>
      </div>
    </div>
    <div class="content-container">
      <nuxt-content :document="project" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  async asyncData({ $content, app, params }) {
    const project = await $content(
      `${app.i18n.locale}/projects`,
      params.slug
    ).fetch()

    return { project }
  },
}
</script>

<style lang="scss">
.project-container {
  padding-top: 100px;
  .project-header-container {
    height: 300px;
    position: relative;
    border-radius: 30px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: blur(1px);
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 102%;
      top: -2px;
      left: 0;
      background: black;
      opacity: 0.5;
    }

    .header-content {
      display: flex;
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;

      .project-title {
        text-align: center;
        color: white;
        font-size: 30px;

        @include tablet-down {
          font-size: 20px;
        }
      }

      .github {
        z-index: 5;
        // background-color: black;
        // height: 40px;
        // width: 40px;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // border-radius: 40px;
        img {
          height: 30px;
          width: 30px;
          filter: invert(100%);
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }
  }

  .content-container {
    width: 60%;
    margin: 0 auto;

    @include tablet-down {
      width: 100%;
    }

    .nuxt-content {
      img {
        width: 100%;
      }

      .normal-img {
        width: auto;
      }

      a,
      p,
      h1,
      h2,
      ul li,
      ol li {
        color: var(--primary);
      }

      a {
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
