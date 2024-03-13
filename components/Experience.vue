<template>
  <div class="experience-container">
    <div class="date-container">
      <div class="date-text">
        {{ experience.date_end_month }} {{ experience.date_end_year }}
        <br class="line-break" />
        - <br class="line-break" />{{ experience.date_begin_month }}
        {{ experience.date_begin_year }}
      </div>
    </div>
    <div class="text-container">
      <h2 v-html="experience.title"></h2>
      <p v-show="type == 'peak'">{{ experience.description }}</p>
      <nuxt-content
        v-show="type == 'full'"
        :document="experience"
      ></nuxt-content>
    </div>
    <div class="logo-container">
      <img :src="experience.logo.src" :alt="experience.logo.alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    experience: Object,
    type: String,
  },
}
</script>

<style lang="scss">
.experience-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;

  @include tablet-down {
    flex-wrap: wrap;
  }

  .date-container {
    width: 20%;
    display: flex;
    align-items: center;

    @include tablet-down {
      width: 70%;
      order: 1;
    }

    .date-text {
      margin-left: 20px;
      text-align: center;
      font-weight: 300;
      width: 120px;
      color: var(--primary);

      @include tablet-down {
        margin-left: 0;
        width: auto;

        .line-break {
          display: none;
        }
      }
    }
  }

  .text-container {
    width: 60%;

    @include tablet-down {
      width: 100%;
      order: 3;
    }

    h2 {
      font-size: 20px;
      font-weight: 300;
      color: var(--primary);
    }

    .bold-text {
      font-weight: 600;
    }

    p {
      width: 100%;
      font-weight: 300;
      text-align: justify;
      color: var(--primary);

      @include tablet-down {
        width: 100%;
        text-align: justify;
      }
    }

    .nuxt-content {
      li {
        color: var(--primary);
      }

      a {
        color: var(--primary);
        text-decoration: underline;
        position: relative;
        font-weight: 400;

        &:hover {
        }
      }
    }
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;

    @include tablet-down {
      order: 2;
      width: 30%;
      justify-content: flex-end;
    }

    img {
      max-width: 100%;
      max-height: 100px;

      @include tablet-down {
        max-width: 100%;
        max-height: 70px;
      }
    }
  }
}
</style>
