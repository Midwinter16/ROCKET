## 1.3.0
### dev
- 社区主板块
  - 展示文章、推荐内容、搜索、轮播图、工具
  - 仿照掘金社区做
  - 主页除了 main-body 都做的差不多了
- 编辑文本
- 发表
  - 审核（文章状态）
- component
  - sswiper改进，更简洁合理的使用方式，未来支持多种格式数据（？）

## 1.4.0
### dev
- community
  - 主页面改成侧栏固定宽度
  - 右侧信息栏完善

## 1.5.0
### dev
- community
  - 设计数据结构
  - 主页面文章视图栏
    - 导入 mock 数据
    - 设置其随着宽度变化变化文字缩略
    - 添加随路由变化获取不同文章
    - 设置侧边栏文章榜数据
    - tabs select 接上数据
    - 主页面宽度变化展示 sidebar 或 topbar
    - 完善子选项
  - 潜在问题：大部分的样式变化都是通过 js 来判断改变的，消耗问题要考虑一下，有没有什么合适的 css 方法来优化该段代码

## 1.5.1
### dev
- community
  - 基本完善主页面所有数据流，包括文章，作者信息，最大限度简化 model 逻辑，更新了 services 接口获取数据进行筛选，从 model 中解耦

## 1.5.2
### dev
- community
  - 主界面：完善文章用户信息和标签信息
  - 将顶部 TopBar 集成为组件 STopBar
  - 编辑界面初始化
  
## 1.5.3
### dev
- community
  - 修改主页路径 main 为 home
  - 添加文章数据结构：状态 - status -  "draft" | "pending" | "publish" | "reject" | "unpublish"
### fix
- community
  - 修复 routes 路径重定向错误
  - 修复 catelogsModel 在非 community 路由的情况下初始化会失败，导致出错
  - 修复 pack-lock 版本为 V1，此前更新为了 V2
### Q
- vscode 更新了一次依赖包后，代码提示没了，不知道为啥