import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faMessage, faGear, faPen, faPlus} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faMessage, faGear, faPen, faPlus)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')