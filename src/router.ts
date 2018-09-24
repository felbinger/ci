import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Account from '@/views/Account.vue';
import Challenges from '@/views/Challenges.vue';
import Challenge from '@/views/Challenge.vue';
import AllChallenges from '@/views/AllChallenges.vue';
import CodingChallenges from '@/views/CodingChallenges.vue';
import HackingChallenges from '@/views/HackingChallenges.vue';
import Feedback from '@/views/Feedback.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'me',
          name: 'account',
          component: Account
        },
        {
          path: 'challenges',
          name: 'challenges',
          component: Challenges,
          children: [
            {
              path: '',
              redirect: 'all'
            },
            {
              path: 'all',
              name: 'all',
              component: AllChallenges
            },
            {
              path: 'hacking',
              name: 'hacking',
              component: HackingChallenges
            },
            {
              path: 'coding',
              name: 'coding',
              component: CodingChallenges
            },
            {
              path: ':id',
              component: Challenge
            }
          ]
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: Feedback
        }
      ]
    }
  ]
});
