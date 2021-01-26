<template>
  <div class="main-experiences-container">
    <Title>{{ title }}</Title>
    <div class="experiences-container">
      <div class="timeline-container">
        <div class="line"></div>
        <div
          v-for="_experience in experiences"
          :key="_experience.slug"
          class="circle"
        ></div>
      </div>
      <div class="experiences-data-container">
        <Experience
          v-for="_experience in experiences"
          :key="_experience.slug"
          class="experience"
          :experience="_experience"
          :type="type"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceSection',
  props: {
    experiences: {
      type: Array,
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'peak',
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      let experiences = this.$el.querySelectorAll('.experience')
      let circles = this.$el.getElementsByClassName('circle')
      var offset = experiences[0].clientHeight / 2 - 9
      circles[0].style.top = offset + 'px'
      for (var i = 1; i < circles.length; i += 1) {
        offset +=
          experiences[i].clientHeight / 2 +
          experiences[i - 1].clientHeight / 2 +
          30
        circles[i].style.top = offset + 'px'
      }
    },
  },
}
</script>

<style lang="scss">
.main-experiences-container {
  display: flex;
  flex-direction: column;

  .experiences-container {
    position: relative;
    display: flex;
    flex-direction: row;

    .timeline-container {
      width: 20px;
      height: 100%;
      position: absolute;
      left: 15.5%;
      top: 0;

      @include tablet-down {
        display: none;
      }

      .line {
        height: calc(100% - 20px);
        width: 4px;
        background-color: var(--primary);
      }

      .circle {
        position: absolute;
        left: -7.5px;
        height: 15px;
        width: 15px;
        border: 2px solid var(--primary);
        border-radius: 90px;
        background-color: var(--bg);
      }
    }

    .experiences-data-container {
      width: calc(100% - 20px);

      @include tablet-down {
        width: 100%;
      }
    }
  }
  .experience-button {
    align-self: flex-end;
  }
}
</style>
