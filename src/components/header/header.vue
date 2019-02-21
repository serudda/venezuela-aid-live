<template>
  <nav class="val-header">
    <a class="val-logo link-reset ml-2" href="/">
      <span class="val-logo__icon"></span>
    </a>

    <div></div>

    <div class="val-nav">
      <a class="val-nav__item language" href @click.prevent="changeLanguage()">{{currentLang}}</a>
      <a class="val-nav__item" href="/my-space">{{ $t('home.header.press-btn') }}</a>
      <a class="val-nav__item" href="/now">{{ $t('home.header.q&a-btn') }}</a>
      <button id="gvng-donate" class="val-btn val-btn--primary val-btn--lg border-radius-lg">{{ $t('home.header.donate-btn') }}</button>
    </div>
  </nav>
</template>

<script>
  import './header.scss';

  import i18n from '../../i18n/locale';

  export default {
    name: 'val-header',
    computed: {
    currentLang() {
      return i18n.locale === 'es' ? 'Español' : 'English';
    }
  },
    methods: {
      changeLanguage() {
        i18n.locale = i18n.locale === 'es' ? 'en' : 'es';
      }
    }
  };
</script>