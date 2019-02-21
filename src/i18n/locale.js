// Import Dependency
import Vue from 'vue';
import VueI18n from 'vue-i18n';

// Import Language
import en from './en.json';
import es from './es.json';

// Config
Vue.use(VueI18n);

// Export
export default new VueI18n({
  locale: 'en',
  messages: {
    en,
    es
  }
});
