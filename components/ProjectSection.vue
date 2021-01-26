<template>
  <div class="projects-main-container">
    <div class="cards-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        class="card-element"
        :project="project"
      ></ProjectCard>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  name: 'ProjectSection',
  components: {
    ProjectCard,
  },
  props: {
    projects: Array,
  },
}
</script>

<style lang="scss">
.projects-main-container {
  display: flex;
  flex-direction: column;

  .cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;

    @include phone {
      flex-direction: column;
      align-items: center;
    }

    @include tablet {
      flex-wrap: wrap;
    }

    .card-element {
      width: 400px;
      height: 400px;
      margin: 50px 20px;

      @include phone {
        height: auto;
        width: 100%;
      }

      @include tablet {
        height: auto;
        width: 80%;
      }
    }
  }
}
</style>
