<template>
  <div>
    <val-header></val-header>
    <home-view></home-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';

import homeView from './views/home/home.vue';

export default {
  name: 'app',
  components: {
    'val-header': header,
    'home-view': homeView
  }
}
</script>
