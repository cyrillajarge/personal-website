<template>
  <nuxt-content :document="project" />
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
.nuxt-content {
  img {
    width: 100%;
  }
}
</style>
