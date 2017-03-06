import Vue from 'vue'
import Router from 'vue-router'

import Device from 'components/Device/Index'
import CallNumber from 'components/CallNumber/Index'
import Package from 'components/Package/Index'
import Client from 'components/Client/Index'
import ClientUpdate from 'components/ClientUpdate/Index'
import SystemSetting from 'components/SystemSetting/Index'
import CloudSetting from 'components/CloudSetting/Index'

import routes from './index'

Vue.use(Router)

let Routes = routes.concat([
  {
    path: '/Device',
    name: 'Device',
    component: Device
  },
  {
    path: '/CallNumber',
    name: 'CallNumber',
    component: CallNumber
  },
  {
    path: '/Package',
    name: 'Package',
    component: Package
  },
  {
    path: '/Client',
    name: 'Client',
    component: Client
  },
  {
    path: '/ClientUpdate',
    name: 'ClientUpdate',
    component: ClientUpdate
  },
  {
    path: '/SystemSetting',
    name: 'SystemSetting',
    component: SystemSetting
  },
  {
    path: '/CloudSetting',
    name: 'CloudSetting',
    component: CloudSetting
  }
])

export default new Router({
  linkActiveClass: 'active',
  routes: Routes
})