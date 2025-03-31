import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "history",
        name: "History",
        component: () => import("@/views/history/index.vue"),
        meta: {
          title: "下单历史"
        }
      },
      {
        path: "finance",
        name: "Finance",
        component: () => import("@/views/finance/index.vue"),
        meta: {
          title: "资金"
        }
      },
      {
        path: "order",
        name: "Order",
        component: () => import("@/views/order/index.vue"),
        meta: {
          title: "订单"
        }
      },
      {
        path: "task",
        name: "Task",
        component: () => import("@/views/task/index.vue"),
        meta: {
          title: "任务"
        }
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/views/profile/index.vue"),
        meta: {
          title: "我的"
        }
      }
    ]
  },
  {
    path: "/recharge",
    name: "Recharge",
    component: () => import("@/views/recharge/index.vue"),
    meta: {
      title: "充值"
    }
  },
  {
    path: "/withdraw",
    name: "Withdraw",
    component: () => import("@/views/withdraw/index.vue"),
    meta: {
      title: "提现"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/register.vue'),
    meta: {
      title: '注册'
    }
  }
];

export default routes;
