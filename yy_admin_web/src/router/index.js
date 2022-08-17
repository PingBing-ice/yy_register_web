import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/yy/hospset',
    component: Layout,
    redirect: '/yy/hospset/list',
    name: '医院预约管理',
    meta: { title: '医院预约管理', icon: 'el-icon-setting' },
    children: [
      {
        path: 'list',
        name: '医院设置列表',
        component: () => import('@/views/yy/hospset/list'),
        meta: { title: '医院设置列表', icon: 'el-icon-s-operation' }
      },
      {
        path: '/edit',
        name: '修改',
        component: () => import('@/views/yy/hospset/save')
      },
      {
        path: 'save',
        name: '添加医院设置',
        component: () => import('@/views/yy/hospset/save'),
        meta: { title: '添加医院设置', icon: 'el-icon-s-tools' }
      }
    ]
  },
  {
    path: '/yy/host',
    component: Layout,
    redirect: '/yy/host/list',
    name: '医院信息',
    alwaysShow: true,
    meta: { title: '医院信息', icon: 'example' },
    children: [
      {
        path: 'list',
        name: '医院列表',
        component: () => import('@/views/yy/hosp/list'),
        meta: { title: '医院列表', icon: 'el-icon-s-operation' }
      },
      {
        path: 'detail',
        name: '医院详情',
        component: () => import('@/views/yy/hosp/detail'),
        meta: { title: '医院列表', icon: 'el-icon-s-operation' },
        hidden: true
      },
      {
        path: 'schedule',
        name: '排班信息',
        component: () => import('@/views/yy/hosp/schedule'),
        meta: { title: '排班信息', icon: 'example' },
        hidden: true
      }
    ]
  },
  {
    path: '/cmn/',
    component: Layout,
    redirect: '/cmn/list',
    name: '数据管理',
    alwaysShow: true,
    meta: { title: '数据管理', icon: 'el-icon-folder' },
    children: [
      {
        path: 'list',
        name: '数据列表',
        component: () => import('@/views/yy/cmn/CmnList'),
        meta: { title: '数据列表', icon: 'el-icon-s-operation' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/userInfo/list',
    name: 'userInfo',
    meta: { title: '用户管理', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'userInfo/list',
        name: '用户列表',
        component: () => import('@/views/yy/userInfo/list'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'userInfo/show/:id',
        name: '用户查看',
        component: () => import('@/views/yy/userInfo/show'),
        meta: { title: '用户查看' },
        hidden: true
      },
      {
        path: 'userInfo/authList',
        name: '认证审批列表',
        component: () => import('@/views/yy/userInfo/authList'),
        meta: { title: '认证审批列表', icon: 'table' }
      }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/order/index',
    name: 'BasesInfo',
    meta: { title: '统计管理', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'order/index',
        name: '预约统计',
        component: () =>import('@/views/yy/sta/index'),
        meta: { title: '预约统计' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
