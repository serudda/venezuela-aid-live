<!-- Template -->
<template>
  <div class="home-view">
    <hero-section class="p-4"></hero-section>
  </div>
</template>

<!-- Script -->
<script>
import './home.scss';

import heroSection from './sections/hero/hero.vue';

export default {
  name: 'home-view',
  components: {
    'hero-section': heroSection
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
