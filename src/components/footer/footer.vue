<template>
  <footer class="val-footer">

    <p class="my-5">Sponsored by:</p>

    <div class="partners-list mb-5">
      <div class="partner">
        <img 
          alt="Aid Live" 
          title="Aid Live" 
          src="../../assets/partners/aid-live-logo.svg" 
          class="partners-list__image mr-3 ml-1 mr-md-5 ml-md-2" />
      </div>
      
      <div class="partner">
        <img 
          alt="Fundación Solidaridad por Colombia" 
          title="Fundación Solidaridad por Colombia" 
          src="../../assets/partners/fundacion-solidaridad-por-colombia-logo.svg" 
          class="partners-list__image mr-3 ml-1 mr-md-5 ml-md-2" />
      </div>

      <div class="partner">
        <img 
          alt="GVNG" 
          title="GVNG" 
          src="../../assets/partners/GVNG-logo.svg" 
          class="partners-list__image mr-3 ml-1 mr-md-5 ml-md-2" />
      </div>

      <div class="partner">
        <img 
          alt="Price Waterhouse Coopers" 
          title="Price Waterhouse Coopers" 
          src="../../assets/partners/price-waterhouse-coopers-logo.svg" 
          class="partners-list__image mr-3 ml-1 mr-md-5 ml-md-2" />
      </div>

    </div>
  </footer>
</template>

<script>
  import './footer.scss';

  export default {
    name: 'val-footer'
  };
</script>