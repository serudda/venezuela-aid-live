<!-- Template -->
<template>
  <div class="banner-section d-flex">
    <div class="date d-inline-flex flex-column">
      <span class="text date__day">22</span>
      <span class="text date__month">FEB</span>
      <span class="text date__city">CÚCUTA</span>
      <span class="text date__country">COLOMBIA</span>
    </div>
    <div class="message d-flex align-items-center justify-content-center px-lg-4">
      <span class="color-white">{{ $t('home.banner-section.title') }}</span>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<!-- Script -->
<script>
import './banner.scss';

export default {
  name: 'banner-section',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
