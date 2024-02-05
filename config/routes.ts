// export const routes: IBestAFSRoute[] = [
//   {
//     path: '/welcome',
//     component: 'IndexPage',
//     name: '欢迎', // 兼容此写法
//     icon: 'testicon',
//     // 更多功能查看
//     // https://beta-pro.ant.design/docs/advanced-menu
//     // ---
//     // 新页面打开
//     target: '_blank',
//     // 不展示顶栏
//     headerRender: false,
//     // 不展示页脚
//     footerRender: false,
//     // 不展示菜单
//     menuRender: false,
//     // 不展示菜单顶栏
//     menuHeaderRender: false,
//     // 权限配置，需要与 plugin-access 插件配合使用
//     access: 'canRead',
//     // 隐藏子菜单
//     hideChildrenInMenu: true,
//     // 隐藏自己和子菜单
//     hideInMenu: true,
//     // 在面包屑中隐藏
//     hideInBreadcrumb: true,
//     // 子项往上提，仍旧展示,
//     flatMenu: true,
//   },
// ];

import {
  BarList,
  NotificationList,
} from "../src/pages/community/constants/index";

export default [
  {
    path: "/",
    redirect: "/community",
  },
  {
    name: "Todo",
    path: "/todo",
    component: "./todo",
  },
  {
    name: "社区",
    path: "community",
    component: "./community",
    hideChildrenInMenu: true,
    routes: [
      {
        path: "/community",
        redirect: "/community/home",
      },
      {
        path: "/community/home",
        redirect: "/community/home/composite",
      },
      {
        name: "社区主页",
        path: "home",
        component: "./community/pages/home",
        routes: BarList.map((item) => ({
          name: item.cname,
          path: `${item.name}`,
          component: "./community/pages/home/MainBody",
        })),
      },
      {
        name: "编辑页",
        path: "edit",
        component: "./community/pages/edit",
      },
      {
        name: "登录页",
        path: "login",
        component: "./community/pages/login",
      },
      {
        name: "通知",
        path: "notification",
        component: "./community/pages/notification",
        routes: NotificationList.map((item) => ({
          name: item.cname,
          path: `${item.name}`,
          component: `./community/pages/notification/${item.name}`,
        })),
      },
      {
        name: "设置页",
        path: "settings",
        redirect: "/community/settings/profile",
      },
      {
        name: "个人主页",
        path: "user",
        component: "./community/pages/user",
      },
      {
        name: "个人资料页",
        path: "settings/profile",
        component: "./community/pages/settings/profile",
      },
      {
        name: "账号设置页",
        path: "settings/account",
        component: "./community/pages/settings/account",
      },
    ],
  },
  {
    name: "招商银行",
    path: "/bank",
    component: "./bank",
    hideChildrenInMenu: true,
    routes: [
      {
        path: "",
        redirect: "/bank/home",
      },
      {
        name: "招商银行-主页",
        path: "home",
        component: "./bank/home",
      },
      {
        name: "招商银行-搜索",
        path: "search",
        component: "./bank/search",
      },
    ],
  },
  {
    name: "轮子",
    path: "/wheel",
    component: "./wheel",
    routes: [
      {
        name: "二楼",
        path: "secondFloor",
        component: "./wheel/wheels/secondFloor",
      },
      {
        name: "合并式表格",
        path: "mergeTable",
        component: "./wheel/wheels/mergeTable",
      },
      {
        name: "类型筛选框",
        path: "filterCheckbox",
        component: "./wheel/wheels/filterCheckbox",
      },
      {
        name: "瀑布",
        path: "waterfalls",
        component: "./wheel/wheels/waterfalls",
      },
      {
        name: "复制粘贴",
        path: "copy",
        component: "./wheel/wheels/copy",
      },
      {
        name: "按钮组",
        path: "buttongroup",
        component: "./wheel/wheels/ButtonGroup",
      },
      {
        name: "性能检测",
        path: "performance",
        component: "./wheel/wheels/Performance",
      },
      {
        name: "QuickForm",
        path: "quickform",
        component: "./wheel/wheels/QForm",
      },
      {
        name: "可拖拽实验室",
        path: "drag",
        component: "./wheel/wheels/Drag",
      },
      {
        name: "AntD-Pro",
        path: "pro",
        component: "./wheel/wheels/proComponent",
      },
      {
        name: "AntV-G6",
        path: "g6",
        component: "./wheel/wheels/Gsix",
      },
      {
        name: "AntV-X6",
        path: "x6",
        component: "./wheel/wheels/Xsix",
      },
    ],
  },
  {
    name: "组件库",
    path: "/component",
    component: "./component",
    routes: [
      {
        name: "验证码模块",
        path: "verification",
        component: "./component/Verification",
      },
    ],
  },
];
