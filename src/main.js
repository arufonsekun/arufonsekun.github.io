import Vue from 'vue'
import App from './App.vue'

import VInput from '@/componets/VInput'
import VButton from '@/componets/VButton'

Vue.config.productionTip = false

Vue.component(VInput.name, VInput)
Vue.component(VButton.name, VButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
