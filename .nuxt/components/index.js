import { wrapFunctional } from './utils'

export { default as CountDown } from '../../components/CountDown.vue'
export { default as Header } from '../../components/Header.vue'
export { default as LoadingIcon } from '../../components/LoadingIcon.vue'
export { default as Options } from '../../components/Options.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as TimeBox } from '../../components/TimeBox.vue'
export { default as UpComingTimeBox } from '../../components/UpComingTimeBox.vue'

export const LazyCountDown = import('../../components/CountDown.vue' /* webpackChunkName: "components/count-down" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLoadingIcon = import('../../components/LoadingIcon.vue' /* webpackChunkName: "components/loading-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyOptions = import('../../components/Options.vue' /* webpackChunkName: "components/options" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyTimeBox = import('../../components/TimeBox.vue' /* webpackChunkName: "components/time-box" */).then(c => wrapFunctional(c.default || c))
export const LazyUpComingTimeBox = import('../../components/UpComingTimeBox.vue' /* webpackChunkName: "components/up-coming-time-box" */).then(c => wrapFunctional(c.default || c))
