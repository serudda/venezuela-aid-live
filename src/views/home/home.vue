<!-- Template -->
<template>
  <div class="home-view mb-5 pb-5">
    <hero-section class="p-4 p-lg-5 mx-lg-3 mt-lg-3"></hero-section>
    <counter-section class="p-5 mb-5"></counter-section>
    <banner-section class="mb-5"></banner-section>
    <explanation-section class="py-5 container"></explanation-section>
    <artists-section class="container"></artists-section>
  </div>
</template>

<!-- Script -->
<script>
import './home.scss';

import heroSection from './sections/hero/hero.vue';
import counterSection from './sections/counter/counter.vue';
import bannerSection from './sections/banner/banner.vue';
import explanationSection from './sections/explanation/explanation.vue';
import artistsSection from './sections/artists/artists.vue';

export default {
  name: 'home-view',
  components: {
    'hero-section': heroSection,
    'counter-section': counterSection,
    'banner-section': bannerSection,
    'explanation-section': explanationSection,
    'artists-section': artistsSection
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
