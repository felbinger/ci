import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Account from '@/views/Account.vue';
import Challenges from '@/views/Challenges.vue';
import Challenge from '@/views/Challenge.vue';
import ListChallenges from '@/views/ListChallenges.vue';
import Category from '@/views/Category.vue';
import Feedback from '@/views/Feedback.vue';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signin',
      component: SignIn,
      beforeEnter: (to, from, next) => {
        const token =
          localStorage.getItem('Token') || sessionStorage.getItem('Token');

        if (token) {
          next({ path: '/' });
        } else {
          next();
        }
      }
    },
    {
      path: '/signup',
      component: SignUp,
      beforeEnter: (to, from, next) => {
        const token =
          localStorage.getItem('Token') || sessionStorage.getItem('Token');

        if (token) {
          next({ path: '/' });
        } else {
          next();
        }
      }
    },
    {
      path: '/',
      alias: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
        const token =
          localStorage.getItem('Token') || sessionStorage.getItem('Token');

        (Vue as any).http
          .get('https://challenges.the-morpheus.de/api/auth', {
            headers: { 'Access-Token': token }
          })
          .then(
            (response: any) => response.json(),
            (response: any) => response.json()
          )
          .then((json: any) => {
            if (!token || json.statusCode === 401) {
              localStorage.removeItem('Token');
              sessionStorage.removeItem('Token');
              next({ path: '/login' });
            } else {
              next();
            }
          });
      },
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
              component: ListChallenges
            },
            {
              path: ':id',
              name: 'challenge',
              component: Challenge
            }
          ]
        },
        {
          path: 'category/:category',
          name: 'category',
          component: Category
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
