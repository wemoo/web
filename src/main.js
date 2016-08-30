import Vue from 'vue'
import Router from 'vue-router'
import {
  domain,
  fromNow,
  dataMatchFormatter,
  formatTimestamp
} from './filters'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Task from './components/Task.vue'
import TaskIndex from './components/TaskIndex.vue'
import TaskNew from './components/TaskNew.vue'
import Log from './components/Log.vue'
import Monitor from './components/Monitor.vue'
import Alert from './components/Alert.vue'

// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)
Vue.filter('dataMatchFormatter', dataMatchFormatter)
Vue.filter('formatTimestamp', formatTimestamp)

// routing
var router = new Router()

router.map({
  '/': {
    component: Home
  },
  '/task': {
    component: Task,
    subRoutes: {
      '/index': {
        component: TaskIndex
      },
      '/new': {
        component: TaskNew
      }
    }
  },
  '/log': {
    component: Log
  },
  '/monitor': {
    component: Monitor
  },
  '/alert': {
    component: Alert
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
