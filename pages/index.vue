<template>
  <div class="home__content-container">
    <div class="home__about-container">
      <div class="info-container">
        <h1 class="info-title" v-html="home.info_title" />
        <p class="info-text" v-html="home.info_text" />
        <MoreButton :link="localePath('/projects')" class="projects-button">{{
          $t('projects')
        }}</MoreButton>
      </div>
      <div class="home__image-container">
        <div class="image-effect1"></div>
        <div class="image-placeholder">
          <img :src="home.picture.src" :alt="home.picture.alt" />
        </div>
        <div class="image-effect2"></div>
      </div>
    </div>
    <div class="home__profexp-container">
      <ExperienceSection
        :experiences="experiences"
        :title="$t('professional-experiences')"
        type="peak"
      />
      <MoreButton class="more-btn" :link="localePath('/experiences')">{{
        $t('learn-more')
      }}</MoreButton>
    </div>
    <div class="home__educ-container">
      <ExperienceSection
        :experiences="education"
        :title="$t('education')"
        type="peak"
      />
      <MoreButton class="more-btn" :link="localePath('/education')">{{
        $t('learn-more')
      }}</MoreButton>
    </div>
    <div class="home__projects-container">
      <Title>{{ $t('projects') }}</Title>
      <ProjectSection :projects="projects" />
      <MoreButton class="more-btn" :link="localePath('/projects')">{{
        $t('all-projects')
      }}</MoreButton>
    </div>
  </div>
</template>

<script>
import MoreButton from '@/components/MoreButton'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectSection from '@/components/ProjectSection'

export default {
  name: 'Home',
  components: {
    MoreButton,
    ExperienceSection,
    ProjectSection,
  },
  async asyncData({ $content, app }) {
    const home = await $content(`${app.i18n.locale}/home`).fetch()
    const education = await $content(`${app.i18n.locale}/education`)
      .sortBy('date_end_year', 'desc')
      .limit(2)
      .fetch()
    education.forEach((element) => {
      element.description = element.description.substring(0, 300)
    })
    const experiences = await $content(`${app.i18n.locale}/experiences`)
      .sortBy('date_begin_year', 'desc')
      .limit(2)
      .fetch()
    experiences.forEach((element) => {
      element.description = element.description.substring(0, 300)
    })
    const projects = await $content(`${app.i18n.locale}/projects`)
      .sortBy('date', 'desc')
      .limit(2)
      .fetch()
    return { home, experiences, education, projects }
  },
}
</script>

<style lang="scss">
.bold-title {
  font-weight: 900;
}

.home__content-container {
  background-color: var(--bg);

  .home__about-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 114px);

    @include tablet-down {
      height: auto;
      width: 100%;
      margin: 0 auto;
      flex-direction: column;
    }

    .info-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35%;
      height: 50%;

      @include tablet-down {
        width: 90%;
        order: 2;
      }

      .projects-button {
        align-self: flex-end;

        @include tablet-down {
          margin-top: 20px;
        }
      }

      .info-title {
        font-size: 35px;
        text-transform: uppercase;
        font-weight: 300;
        color: var(--primary);

        @include tablet-down {
          font-size: 30px;
          text-align: center;
        }
      }

      .info-text {
        line-height: 20px;
        font-weight: 300;
        color: var(--primary);
        text-align: justify;

        .strong-text {
          font-weight: 600 !important;
        }
      }

      .strong-text {
        font-weight: 600;
      }
    }

    .home__image-container {
      width: 30%;
      height: 400px;
      position: relative;

      @include phone {
        order: 1;
        margin-top: 80px;
        margin-bottom: 80px;
        width: 75%;
        height: 200px;
      }

      @include tablet {
        order: 1;
        margin-top: 80px;
        margin-bottom: 80px;
        width: 75%;
        height: 300px;
      }

      &:hover {
        .image-placeholder {
          transform: translate(0px, 0px);
          box-shadow: none;
        }

        .image-effect1 {
          opacity: 0;
          box-shadow: none;
        }

        .image-effect2 {
          opacity: 0;
          transform: translate(0px, 0px);
          box-shadow: none;
        }
      }

      .image-placeholder {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        overflow: hidden;
        z-index: 6;
        transform: translate(-25px, 25px);
        transition: transform 1s, opacity 1s, box-shadow 1s;
        box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.4);

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          filter: grayscale(100%);
        }
      }

      .image-effect1 {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        border: 3px solid var(--primary);
        border-radius: 30px;
        z-index: 5;
        transition: opacity 1s, box-shadow 1s;
        box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.4);
      }

      .image-effect2 {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        border: 3px solid var(--primary);
        border-radius: 30px;
        transform: translate(25px, -25px);
        z-index: 4;
        transition: transform 1s, opacity 1s, box-shadow 1s;
        box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.4);
      }
    }
  }

  .home__profexp-container,
  .home__educ-container,
  .home__projects-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    .more-btn {
      margin-top: 30px;
      align-self: flex-end;
      margin-bottom: 50px;

      @include tablet-down {
        margin-top: 20px;
      }
    }
  }
}
</style>
