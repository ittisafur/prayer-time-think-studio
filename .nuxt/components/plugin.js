import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CountDown: () => import('../../components/CountDown.vue' /* webpackChunkName: "components/count-down" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  LoadingIcon: () => import('../../components/LoadingIcon.vue' /* webpackChunkName: "components/loading-icon" */).then(c => wrapFunctional(c.default || c)),
  Options: () => import('../../components/Options.vue' /* webpackChunkName: "components/options" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
