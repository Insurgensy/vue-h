import Vue from 'vue'
import Router from 'vue-router'
import VueResourse from 'vue-resource'
import VueAnalytics from 'vue-analytics'

import HelloWorld from '@/components/HelloWorld'

import Courses from  '@/components/Courses'
import Persons from  '@/components/Persons'
import post from  '@/components/post'
import FirstThemeTest from  '@/components/Theme1/FirstThemeTest'
import test1 from  '@/components/Theme1/test1'
import UserItem from  '@/components/UserItem'
import firstThemeInfo from  '@/components/firstThemeInfo'
import achievements from  '@/components/achievements'
import catalog from '@/components/catalog'
import registration from '@/components/registration'

import test2 from  '@/components/themeTests/test2'
import test3 from  '@/components/themeTests/test3'
import test4 from  '@/components/themeTests/test4'
import test5 from  '@/components/themeTests/test5'
import test6 from  '@/components/themeTests/test6'
import test7 from  '@/components/themeTests/test7'
import test8 from  '@/components/themeTests/test8'
import test9 from  '@/components/themeTests/test9'
import test10 from  '@/components/themeTests/test10'
import test11 from  '@/components/themeTests/test11'
import test12 from  '@/components/themeTests/test12'
import test13 from  '@/components/themeTests/test13'
import test14 from  '@/components/themeTests/test14'
import test15 from  '@/components/themeTests/test15'
import test16 from  '@/components/themeTests/test16'
import test17 from  '@/components/themeTests/test17'
import test18 from  '@/components/themeTests/test18'
import test19 from  '@/components/themeTests/test19'
import test20 from  '@/components/themeTests/test20'
import test21 from  '@/components/themeTests/test21'
import test22 from  '@/components/themeTests/test22'
import test23 from  '@/components/themeTests/test23'
import test24 from  '@/components/themeTests/test24'
import test25 from  '@/components/themeTests/test25'
import test26 from  '@/components/themeTests/test26'
import test27 from  '@/components/themeTests/test27'
import test28 from  '@/components/themeTests/test28'
import test29 from  '@/components/themeTests/test29'
import test30 from  '@/components/themeTests/test30'






Vue.use(Router)
Vue.use(VueResourse)

Vue.use(VueAnalytics, {
  id: 'UA-115434189-1',
  checkDuplicatedScript: true
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
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
    },
    {
      path: '/UserItem',
      name: 'UserItem',
      component: UserItem
    },
    //Theme Info components
    {
      path: '/pervisna_doba',
      name: 'fi',
      component: firstThemeInfo
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: achievements
    },
    //Роутер тестов
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/test4',
      name: 'test4',
      component: test4
    },
    {
      path: '/test5',
      name: 'test5',
      component: test5
    },
    {
      path: '/test6',
      name: 'test6',
      component: test6
    },
    {
      path: '/test7',
      name: 'test7',
      component: test7
    },
    {
      path: '/test8',
      name: 'test8',
      component: test8
    },
    {
      path: '/test9',
      name: 'test9',
      component: test9
    },
    {
      path: '/test10',
      name: 'test10',
      component: test10
    },
    {
      path: '/test11',
      name: 'test11',
      component: test11
    },
    {
      path: '/test12',
      name: 'test12',
      component: test12
    },
    
    {
      path: '/test13',
      name: 'test13',
      component: test13
    },
    {
      path: '/test14',
      name: 'test14',
      component: test14
    },
    {
      path: '/test15',
      name: 'test15',
      component: test15
    },
    {
      path: '/test16',
      name: 'test16',
      component: test16
    },
    {
      path: '/test17',
      name: 'test17',
      component: test17
    },
    {
      path: '/test18',
      name: 'test18',
      component: test18
    },
    {
      path: '/test19',
      name: 'test19',
      component: test19
    },
    {
      path: '/test20',
      name: 'test20',
      component: test20
    },
    {
      path: '/test21',
      name: 'test21',
      component: test21
    },
    {
      path: '/test22',
      name: 'test22',
      component: test22
    },
    {
      path: '/test23',
      name: 'test23',
      component: test23
    },
    {
      path: '/test24',
      name: 'test24',
      component: test24
    },
    {
      path: '/test25',
      name: 'test25',
      component: test25
    },
    {
      path: '/test26',
      name: 'test26',
      component: test26
    },
    {
      path: '/test27',
      name: 'test27',
      component: test27
    },
    {
      path: '/test28',
      name: 'test28',
      component: test28
    },
    {
      path: '/test29',
      name: 'test29',
      component: test29
    },
    {
      path: '/test30',
      name: 'test30',
      component: test30
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: catalog
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },


   
  ]
})
