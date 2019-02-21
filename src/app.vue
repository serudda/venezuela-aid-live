<template>
  <div id="app">
    <val-header></val-header>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  name: 'app',
  components: {
    'val-header': header
  }
}
</script>
