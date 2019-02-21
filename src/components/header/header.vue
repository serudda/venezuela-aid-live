<template>
  <nav class="val-header">
    <a class="val-logo link-reset ml-2" href="/">
      <span class="val-logo__icon"></span>
    </a>

    <div class="val-nav">
      <a class="val-nav__item" href="/my-space">PRESS</a>
      <a class="val-nav__item" href="/now">Q&A</a>
      <button class="val-btn val-btn--primary val-btn--lg border-radius-lg">DONATE NOW</button>
    </div>
  </nav>
</template>

<script lang="ts">
  import './header.scss';

  export default {
    name: 'val-header'
  };
</script>