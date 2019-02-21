<!-- Template -->
<template>
  <div class="artists-section">
    <div class="general text-center mb-5">
      <h2 class="mb-4">{{ $t('home.explanation-section.general-title') }}</h2>
      <p class="pt-2 mb-4">{{ $t('home.explanation-section.general-description') }}</p> 
      <p class="pt-2">{{ $t('home.explanation-section.general-description2') }}</p>
    </div>
    <div class="details pt-4">
      <div class="row no-glutters text-center text-lg-left">
        <div class="col-12 col-lg-6 pr-3 pr-lg-5">
          <h2 class="mb-4">{{ $t('home.explanation-section.details-title') }}</h2>
          <p class="pt-2">{{ $t('home.explanation-section.details-description') }}</p>
        </div>
        <div class="col-12 col-lg-6 pl-3 pl-lg-5">
          <h2 class="mb-4 pt-4 pt-lg-0">{{ $t('home.explanation-section.details-title2') }}</h2>
          <p class="pt-2">{{ $t('home.explanation-section.details-description2') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Script -->
<script>

export default {
  name: 'artists-section',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
