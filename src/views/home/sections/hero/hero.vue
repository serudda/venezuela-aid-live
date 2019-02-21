<!-- Template -->
<template>
  <div class="hero-section">
    <div class="row no-gutters hero-content">
      <div class="col-12 col-lg-5 p-0 p-lg-4 pr-lg-5 text-block">
          <h2 class="mb-4">{{ $t('home.hero-section.title') }}</h2>
          <p class="mb-4">{{ $t('home.hero-section.description') }}</p>
          <button id="gvng-donate" class="val-btn val-btn--primary val-btn--lg val-btn--block border-radius-lg mb-4">{{ $t('global.donate-btn') }}</button>
          <p>{{ $t('home.hero-section.help-text') }}</p>
      </div>
      <div class="col-12 col-lg-7 p-0 p-lg-4 pl-lg-5 mt-4 mt-lg-0 video-block">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VCMznkolBWo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import './hero.scss';

export default {
  name: 'hero-section',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
