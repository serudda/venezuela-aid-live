<!-- Template -->
<template>
  <div class="counter-section container text-center">
    <h3 class="color-secondary mb-4">International Music Benefit Live-streaming in:</h3>
    <val-counter deadline="2019-02-22T10:00:00"></val-counter>
  </div>
</template>

<!-- Script -->
<script>
import './counter.scss';

import counter from '../../../../components/counter/counter.vue';

export default {
  name: 'counter-section',
  components: {
    'val-counter': counter
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
