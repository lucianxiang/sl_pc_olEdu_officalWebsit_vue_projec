import Vue from 'vue'
import Router from 'vue-router'
import HomeBar from '@/components/HomeBar'
import HomePage from '@/components/HomePage'
import NewsList from '@/components/NewsCompoent/NewsList'
import NewsDetail from '@/components/NewsCompoent/NewsDetail'
import NewsListChild from '@/components/NewsCompoent/NewsListChild'
import SinglePage from '@/components/SinglePage'
import LeaveWord from '@/components/LeaveWord'
import ShowPage from '@/components/ShowPage'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/homeBar',
      name: 'HomeBarFather',
      component: HomeBar,
      meta:{
        title: '首页导航'
      }
    },
    {
      path: '/',
      component: HomeBar,
      children:[
        {
          path: '/',
          name:'HomePageFather',
          component: HomePage,
          meta:{
            title: '首页'
          }
        },
        {
          path: '/homePage',
          name:'HomePage',
          component: HomePage,
          meta:{
            title: '首页'
          },
        },
        {
          path: '/newsList',
          name:'NewsList',
          component: NewsList,
          meta:{
            title: '新闻列表框架'
          },
          children:[
            {
              path: '/newsListChild',
              name:'NewsListChild',
              component: NewsListChild,
              meta:{
                title: '新闻列表'
              },
            },
            {
              path: '/newsDetail',
              name:'NewsDetail',
              component: NewsDetail,
              meta:{
                title: '新闻详细内容'
              },
            },
          ],
        },
        {
          path: '/singlePage',
          name:'SinglePage',
          component: SinglePage,
          meta:{
            title: '关于我们'
          },
        },
        {
          path: '/leaveWord',
          name:'LeaveWord',
          component: LeaveWord,
          meta:{
            title: '留言页'
          },
        },
        {
          path: '/showPage',
          name:'ShowPage',
          component: ShowPage,
          meta:{
            title: '校园风采'
          },
        },
      ],
    },




















  ]
})
