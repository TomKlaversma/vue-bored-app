import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserFriends);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
