<template>
  <div class="val-counter">
    <div class="digit digit--day d-inline-flex flex-column">
      <span class="text digit__number">22</span>
      <span class="text digit__label">Dia</span>
    </div>
    <div class="digit digit--hour d-inline-flex flex-column">
      <span class="text digit__number">22</span>
      <span class="text digit__label">Hrs.</span>
    </div>
    <div class="digit digit--min d-inline-flex flex-column">
      <span class="text digit__number">22</span>
      <span class="text digit__label">Min.</span>
    </div>
    <div class="digit digit--sec d-inline-flex flex-column">
      <span class="text digit__number">22</span>
      <span class="text digit__label">Seg.</span>
    </div>
  </div>
</template>

<script>
  import './counter.scss';

  export default {
    name: 'val-counter'
  };
</script>