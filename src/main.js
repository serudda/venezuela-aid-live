import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18n from './i18n/locale';
import app from './app.vue';

/* External styles dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Own styles dependencies */
import './theme/app.scss';

Vue.config.productionTip = false;
Vue.use(VueI18n);

new Vue({
  i18n,
  render: h => h(app),
}).$mount('#app');
