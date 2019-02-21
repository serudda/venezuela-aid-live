<!-- Template -->
<template>
  <div class="home-view">
    <hero-section class="p-5"></hero-section>
    <counter-section class="p-4 pb-5 mb-5"></counter-section>
    <banner-section></banner-section>
  </div>
</template>

<!-- Script -->
<script>
import './home.scss';

import heroSection from './sections/hero/hero.vue';
import counterSection from './sections/counter/counter.vue';
import bannerSection from './sections/banner/banner.vue';

export default {
  name: 'home-view',
  components: {
    'hero-section': heroSection,
    'counter-section': counterSection,
    'banner-section': bannerSection
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
