<template>
  <div>
    <val-header></val-header>
    <home-view></home-view>
    <val-footer></val-footer>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import footer from './components/footer/footer.vue';

import homeView from './views/home/home.vue';

export default {
  name: 'app',
  components: {
    'val-header': header,
    'home-view': homeView,
    'val-footer': footer
  }
}
</script>
