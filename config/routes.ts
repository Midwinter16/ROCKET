export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "首页",
    path: "/home",
    component: "./home",
  },
  {
    name: "Todo",
    path: "/todo",
    component: "./todo",
  },
  {
    name: "招商银行",
    path: "/bank",
    component: "./bank",
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
];
