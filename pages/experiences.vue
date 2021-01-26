<template>
  <div class="experiences-page-container">
    <ExperienceSection
      :title="$t('professional-experiences')"
      :experiences="experiences"
      type="full"
    />
  </div>
</template>

<script>
import ExperienceSection from '@/components/ExperienceSection'

export default {
  name: 'Experiences',
  components: {
    ExperienceSection,
  },
  async asyncData({ $content, app }) {
    const experiences = await $content(`${app.i18n.locale}/experiences`)
      .sortBy('date_begin_year', 'desc')
      .fetch()
    return { experiences }
  },
}
</script>

<style lang="scss">
.experiences-page-container {
  display: flex;
  align-items: center;
}
</style>
