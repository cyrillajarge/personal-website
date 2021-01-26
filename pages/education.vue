<template>
  <div class="education-page-container">
    <ExperienceSection
      :title="$t('education')"
      :experiences="education"
      type="full"
    />
  </div>
</template>

<script>
import ExperienceSection from '@/components/ExperienceSection'

export default {
  name: 'Education',
  components: {
    ExperienceSection,
  },
  async asyncData({ $content, app }) {
    const education = await $content(`${app.i18n.locale}/education`)
      .sortBy('date_begin_year', 'desc')
      .fetch()
    return { education }
  },
}
</script>

<style lang="scss">
.education-page-container {
  display: flex;
  align-items: center;
}
</style>
