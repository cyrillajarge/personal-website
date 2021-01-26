<template>
  <div class="header__main-container">
    <div class="header__title-container">
      <NuxtLink class="site-title" :to="localePath('/')"
        >Cyril<br /><span>Lajarge</span></NuxtLink
      >
    </div>
    <div class="header__menu-container">
      <div class="nav-container">
        <div class="nav-element">
          <NuxtLink :to="localePath('/projects')">{{
            $t('projects')
          }}</NuxtLink>
        </div>
      </div>
      <div class="language-container">
        <NuxtLink v-show="$i18n.locale == 'fr'" :to="switchLocalePath('en')"
          ><img src="@/static/france.svg" alt="Francais"
        /></NuxtLink>
        <NuxtLink v-show="$i18n.locale == 'en'" :to="switchLocalePath('fr')">
          <img src="@/static/etats-unis.svg" alt="English"
        /></NuxtLink>
      </div>
      <no-ssr>
        <div class="night-container">
          <div
            class="toggle"
            :class="{
              'dark-toggle': this.$colorMode.preference == 'dark',
              'light-toggle': this.$colorMode.preference == 'light',
            }"
            @click="toggleDarkMode"
          ></div>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      french: false,
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.$colorMode.preference == 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    },
    toggleLanguage() {
      this.french = !this.french
    },
  },
}
</script>

<style lang="scss">
.header__main-container {
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--bg);

  @include tablet-down {
    width: 100%;
  }

  .header__title-container {
    margin-left: 50px;

    @include phone {
      margin-left: 20px;
    }

    @include tablet {
      margin-left: 40px;
    }

    .site-title {
      text-decoration: none;
      margin: 0;
      text-transform: uppercase;
      font-size: 30px;
      color: var(--primary);
      font-family: 'Roboto Light';

      @include tablet-down {
        font-size: 20px;
      }

      span {
        font-family: 'Roboto Black';
      }
    }
  }

  .header__menu-container {
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @include phone {
      margin-right: 20px;
    }

    @include tablet-down {
      margin-right: 40px;
    }

    .nav-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 200px;

      @include tablet-down {
        width: auto;
      }

      .nav-element {
        display: flex;
        align-items: center;
        position: relative;

        @include phone {
          margin: 0 10px;
        }

        @include tablet {
          margin: 0 20px;
        }

        &::after {
          content: '';
          position: absolute;
          opacity: 0;
          z-index: 10;
          bottom: 20%;
          left: 0;
          height: 3px;
          width: 100%;
          background-color: lightgrey;
          transition: opacity 1s;
        }

        .nuxt-link-exact-active {
          &::after {
            content: '';
            position: absolute;
            z-index: 11;
            bottom: 20%;
            left: 0;
            height: 3px;
            width: 100%;
            background-color: var(--primary);
          }
        }

        &:hover {
          &::after {
            opacity: 1;
          }
        }

        a {
          margin: 0;
          font-weight: 300;
          font-size: 16px;
          color: var(--primary);
          text-transform: uppercase;
          text-decoration: none;

          @include tablet-down {
            font-size: 14px;
          }
        }
      }
    }

    .language-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;

      @include phone {
        width: auto;
        margin: 0 10px;
      }

      @include tablet {
        width: auto;
        margin: 0 20px;
      }

      img {
        height: 25px;
      }
    }
    .night-container {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include phone {
        width: auto;
        margin: 0 10px;
      }

      @include tablet {
        width: auto;
        margin: 0 20px;
      }

      .toggle {
        transition: all 500ms;
      }

      .light-toggle {
        position: relative;
        height: 20px;
        width: 40px;
        border: 1px solid black;
        border-radius: 90px;
        background-color: white;
        &::after {
          content: '';
          height: 15px;
          width: 15px;
          position: absolute;
          top: 50%;
          left: 2px;
          transform: translateY(-50%);
          background-color: black;
          border-radius: 180px;
        }
      }

      .dark-toggle {
        position: relative;
        height: 20px;
        width: 40px;
        border: 1px solid white;
        border-radius: 90px;
        background-color: black;
        &::after {
          content: '';
          height: 15px;
          width: 15px;
          position: absolute;
          top: 50%;
          right: 2px;
          transform: translateY(-50%);
          background-color: white;
          border-radius: 180px;
        }
      }
    }
  }
}
</style>
