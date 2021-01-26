<template>
  <div class="ppage__content-container">
    <Title class="ppage-title">{{ $t('projects') }}</Title>
    <p class="ppage-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
      diam consequat, dignissim ligula eget, tincidunt ex. Donec nisl nisl,
      aliquam at turpis in, venenatis vehicula nisl. Etiam dapibus est
      pellentesque lorem consequat luctus. Nam sit amet nisl et justo rhoncus
      interdum. Mauris et elit volutpat, volutpat risus vel, molestie erat.
      Fusce varius lectus ac justo venenatis bibendum. Pellentesque congue sit
      amet dui non venenatis. Maecenas sit amet urna at lectus placerat
      tincidunt quis ac purus. Nunc at elit felis. Nunc semper dolor risus, ac
      hendrerit risus sollicitudin ac. Proin quis ligula elementum, faucibus
      nulla vel, vestibulum orci. Vivamus eu luctus nunc, sed cursus tellus.
      Donec accumsan velit et libero elementum pretium.
    </p>
    <ProjectSection class="ppage-project-section" :projects="projects" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import ProjectSection from '@/components/ProjectSection'

export default {
  name: 'Projects',
  components: {
    Title,
    ProjectSection,
  },
  async asyncData({ $content, app }) {
    const projects = await $content(`${app.i18n.locale}/projects`)
      .sortBy('date', 'desc')
      .fetch()
    return { projects }
  },
}
</script>

<style lang="scss">
.ppage__content-container {
  min-height: calc(100vh - 150px - 114px);

  .ppage-title {
    text-align: center;
    margin-top: 100px;

    @include tablet-down {
      margin-top: 50px;
    }
  }

  .ppage-desc {
    color: var(--primary);
    width: 70%;
    text-align: center;
    margin: 0 auto;
    line-height: 25px;
    margin-bottom: 100px;

    @include tablet-down {
      width: 100%;
    }
  }

  .ppage-project-section {
    margin-bottom: 100px;
  }
}
</style>
