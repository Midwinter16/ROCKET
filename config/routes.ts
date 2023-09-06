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

import { SideBarList } from "../src/pages/community/constants/index";

export default [
  {
    path: "/",
    redirect: "/todo",
  },
  {
    name: "Todo",
    path: "/todo",
    component: "./todo",
  },
  {
    name: "社区",
    path: "/community",
    component: "./community",
    hideChildrenInMenu: true,
    routes: [
      {
        path: "",
        redirect: "/community/main/composite",
      },
      {
        name: "社区主页",
        path: "/community/main",
        component: "./community/pages/main",
        routes: SideBarList.map((item) => ({
          name: item.cname,
          path: `/community/main/${item.name}`,
          component: "./community/pages/main/MainBody",
        })),
      },
      {
        name: "编辑页",
        path: "/community/edit",
        component: "./community/pages/edit",
      },
      {
        name: "登录页",
        path: "/community/login",
        component: "./community/pages/login",
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
    ],
  },
];
