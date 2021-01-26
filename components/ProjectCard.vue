<template>
  <div class="card-container">
    <div class="info-square">
      <div class="project-info">
        <h1>{{ project.title }}</h1>
        <p>
          {{ project.description }}
        </p>
        <div class="project-links">
          <a :href="project.github" class="github-container">
            <p>Check on</p>
            <img src="/github.svg" alt="Github" />
          </a>
          <MoreButton
            class="card-more-btn"
            :link="localePath('/projects') + '/' + project.slug"
            >{{ $t('learn-more') }}</MoreButton
          >
        </div>
      </div>
    </div>
    <div class="image-square">
      <img :src="project.thumbnail.src" :alt="project.thumbnail.alt" />
    </div>
    <div class="decoration-square"></div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
}
</script>

<style lang="scss">
.card-container {
  position: relative;
  height: 100%;
  width: 100%;
  position: relative;
  text-decoration: none;

  @include tablet-down {
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: var(--bshadow);
    margin-bottom: 30px;
  }

  &:hover {
    .info-square {
      transform: translate(-25px, 25px);
      background-color: var(--card-bg);
      opacity: 1;
      box-shadow: var(--bshadow);

      @include tablet-down {
        transform: translate(0);
        box-shadow: none;
      }
    }

    .image-square {
      img {
        filter: blur(0.5px);

        @include tablet-down {
          filter: none;
        }
      }
    }

    .decoration-square {
      transform: translate(25px, -25px);
      opacity: 0.5;
      box-shadow: var(--bshadow);

      @include tablet-down {
        transform: translate(0);
        box-shadow: none;
      }
    }
  }

  .info-square {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: var(--bg);
    z-index: 5;
    transition: transform 1s, background-color 1s, opacity 1s, box-shadow 1s;
    box-shadow: none;
    opacity: 0;

    @include tablet-down {
      opacity: 1;
      height: auto;
      order: 2;
      position: static;
      transition: none;
    }

    .project-info {
      height: calc(100% - 40px);
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h1 {
        text-align: center;
        color: var(--primary);

        @include tablet-down {
          font-size: 24px;
        }
      }

      p {
        color: var(--primary);
        text-align: center;

        @include tablet-down {
          font-size: 14px;
        }
      }

      .project-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 80%;

        @include phone {
          width: 100%;
        }

        .card-more-btn {
          @include tablet-down {
            font-size: 14px;
          }
        }

        .github-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          text-decoration: none;

          p {
            color: var(--primary);

            @include tablet-down {
              font-size: 14px;
            }
          }

          img {
            margin-left: 10px;
            height: 25px;
            filter: var(--filter);
          }
        }
      }
    }
  }

  .image-square {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    z-index: 4;
    box-shadow: var(--bshadow);

    @include tablet-down {
      height: auto;
      order: 1;
      border-radius: 0px;
      // border-top-left-radius: 30px;
      // border-top-right-radius: 30px;
      box-shadow: none;
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      filter: blur(0px);
      transition: filter 1s;
    }
  }

  .decoration-square {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: var(--bg);
    z-index: 3;
    transition: transform 1s, opacity 1s, box-shadow 1s;
    box-shadow: none;
    opacity: 0;

    @include tablet-down {
      display: none;
    }
  }
}
</style>
