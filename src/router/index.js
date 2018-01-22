import Vue from 'vue'
import Router from 'vue-router'
import VueResourse from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import FirstTest from  '@/components/FirstTest'
import Courses from  '@/components/Courses'
import Persons from  '@/components/Persons'
import post from  '@/components/post'
import FirstThemeTest from  '@/components/Theme1/FirstThemeTest'
import test1 from  '@/components/Theme1/test1'


Vue.use(Router)
Vue.use(VueResourse)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },

    {
      path: '/first-test',
      name: 'Hellos',
      component: FirstTest
    },

    {
      path: '/courses',
      name: 'all-courses',
      component: Courses
    },

    {
      path: '/Persons',
      name: 'all-persons',
      component: Persons
    },

    {
      path: '/post/:id',
      name: 'post',
      component: post
    },
    {
      path: '/FirstThemeTest',
      name: 'FirstTheme',
      component: FirstThemeTest
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    }
  ]
})
