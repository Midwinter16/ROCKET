# README

## 工具
- umi-max
- antd
- antd G2Plot
- Swiper
- ahooks
- lodash


## 0.1 

- init

## 0.1.1 

- 重构 todo 项数据结构
- 将 list 组件拆分为“completed”和“uncompleted”

## 0.1.2

- 添加 SDatePicker，功能为禁用选择更早之前的时间
- 完善 Drawer 内容，编辑时内容包括标题、描述、截止时间、提醒时间、标签和优先级

## 0.1.3

- 修改优先级描述为 P+number
- 添加 addTodo 功能
- EditableViewer 现在保存后自动关闭和清空表单
- 修改 bug：当时间处于未设置的情况会自动填充当下时间

## 0.1.4

- 添加todoModel方法：状态修改，删除todo
- 待办列表
  - 查阅/删除待办
  - 优先级tag添加颜色
  - 添加排序功能
- 同步上述到完成列表

## 0.1.5

- 添加标签功能：
  - 编辑标签：包括标签名称和颜色
  - 查阅标签
  - 标签名称重复检测

## 0.1.6

- 添加待办临近到期提示
- 添加已过期待办 tabs
- 删除列表中描述部分

## 0.1.7
- 修改了 labels 类型，使其对齐 select 中的 options

## 0.2.1
### dev
- 添加待办数据统计
  - 逾期完成+按时完成+无限制任务+未完成，用饼图展示
  - 完成率 + 完成数，用两个 card 展示
  - 展示最近一个将要逾期的任务，用倒计时 card 展示
    - 点击后 Tabs 激活到待办事项
  - 统计不同优先级的个数和完成率，用重叠柱状图展示
- Tabs 
  - 新增图标
  - 新增逾期待办，将原本的待办事项数据从未完成修改为未过期且未完成，逾期待办数据为过期且未完成
- TodoModel
  - 添加方法备注
  - 添加获取未逾期待办，获取最快到期待办
- UserModel
  - 新增 user 数据模型
### fix
- 修复关闭添加待办时， switch 状态没重置
- 修复查看待办时，如果截止时间和提醒时间为 undefined 时展示 span 文字
- 修复标签管理中查阅标签时标签名称为空
- 当任务为不限制 deadline 时 Table 显示无限制
- 修复：当任务已完成时还在逾期代办列表中
- 修复：未能正确获取未逾期待办
- 修复：待办提醒失效
- 修复：JSON 数据 undefined 问题
- 修复：标签名修改不生效
## 0.2.2
### dev
- 标签查阅添加删除功能
- 初始化 SSwiper 组件
  - 可选择属性包括：是否开启分页，是否开启导航，是否开启滚动条，是否自动播放，是否循环，选择 effect 类型（fade,coverflow,filp,cards,creative），方向
  - 设置属性：宽，高
  - 传入数据为数组，元素支持字符串和图片链接
- 初始化点击行为跟踪
  - @/component/Trace
- 初始化 ErrorBoundary
- 优化渲染，将 useEffect 中多个 setState 改为使用 unstable_batchedUpdates 一次渲染，减少渲染次数

## 0.2.3
### dev
- 初始化 STable
  - 监听 offset 和 absTop 的高度，来更改 table 的高度，设置其高度不会超出视窗高度
  - ❌只能用在不同路由下，否则会有问题
- todo
  - 重写 EditableViewer 逻辑，改为withViewMode这一套，简化代码逻辑
  - 添加编辑后退出提醒气泡框

### fix
- todo
  - 重复点击表单弹出 drawer，第二次后不会显示数据，这是因为之前写的逻辑是将内容销毁，现在的逻辑改成了使用 useEffect 来设置初始表单值，且删掉销毁这一步

## 0.2.4
### fix
- todo
  - 修复不能正确获取未逾期待办
  - 修复观察状态下的 drawer 多出的保存按钮

## 1.0.0
### dev
- 仿银行 App
  - SIcon 设置自带Badge的图标
  - 主页面
    - 顶部 swiper 创建
    - 主/次业务展示
    - 主 Swiper 创建
  - 搜索页面
    - search 页面初始化
  - 城市选择页面
  
## 1.1.0
### dev
- 仿银行 App
  - 隐藏侧边栏子路由
  - 添加开屏屏保
  - 初始化开屏广告位
- 二楼效果测试
  - 初始化

## 1.2.0
### dev
- 合并型 Table
  - init，效果基本完成，待优化

## 1.3.0
### dev
- wheel
  - 将实现的效果作为轮子放在 wheel 页面下
- community 社区
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
      - 这里思路卡住了，暂时不清楚怎么解决自适应变化宽度，可能可以直接设置 col 的宽度为变换的宽度
      - 已解决，将 row 设置为不允许自动换行，并且将设置宽度的方法,delay200，等待 dom 完全加载完成后再设置宽度。
      - 还是有问题，如何处理 width 在 dom 加载完成后再赋值
      - 最终通过在 model 中添加 loading 解决
    - 添加随路由变化获取不同文章
    - 设置侧边栏文章榜数据
    - tabs select 接上数据
    - 主页面宽度变化展示 sidebar 或 topbar
    - 完善子选项
  - 潜在问题：大部分的样式变化都是通过 js 来判断改变的，消耗问题要考虑一下，有没有什么合适的 css 方法来优化该段代码

## todo 

- 全局
  - [ ] Trace：点击行为跟踪上报，统计用户行为，要在用户登录和用户页面的基础上做
  - [ ] 用户相关，登录，退出，设置，数据统计
    - @hsh 已完成用户登录初始化界面，仅限于 community 下
  - [ ] 完善 ErrorBoundary
  - [x] 统一所有资源路径，使用 alias 引入
    - icons：/src/assets/icons --- alias @icons
    - imgs：/src/assets/imgs --- alias @imgs
    - style：/src/assets/style --- alias @style
- todo
  - [ ] 添加视图切换，列表 - 卡片 - 日历
  - [ ] 待办类型增加：重复型的任务
  - [ ] 任务类型过滤
- community
  - [ ] 设计数据结构，内容包含
    - 标签含义 uniq唯一 limit最大长度 undefined非必填 src图片地址 rich富文本
    - [x] 用户 User
      - 用户 id - id - number(uniq)
      - 昵称 - cname - string(limit 12)
      - 用户名 - username - string(uniq limit 12)
      - 用户密码 - password - string(limit 12)
      - 头像 - avatar - string(src)
      - 个人简介 - description - string(limit 100)
      - 粉丝 - fans - number
      - [x] 额外信息 - other_info - OtherInfo
      - [ ] 用户行为追踪 - track - Track
      - 头衔 - titles - string[]
      - 关注的标签 - follow_labels - Label[]
      - 关注的用户 - follow_users - User.id[]
      - 发表的文章 - articles - Comment.id[]
      - 点赞的文章 - like_articles - Comment.id[]
      - 收藏的文章 - favorite_articles - Comment.id[]
      - 评论的文章 - comment_articles - Comment.id[]
    - [x] 用户其他信息 OtherInfo
      - 性别 - sex - "male" | "female" | "secret"(undefined)
      - 年龄 - age - number | 'secret'(undefined)
      - 兴趣标签 - likes - string[](limit 5)
      - 职业信息 - career - string(undefined)
    - [ ] 行为追踪 Track
      - 待考虑
    - [x] 文章 Article
      - 文章 id - id - number(uniq)
      - 标题 - title - string(uniq limit 20)
      - 摘要 - abstract - string(limit 20 undefined) - 如果是非填写可以取正文的前 20 个字符
      - 作者 id - author_id - User.id
      - 发布时间 - create_at - new Date
      - 更新时间 - update_at - new Date
      - 封面图片 - cover - string(src)
      - 标签(分类) - labels - string[] - 至少一个预定义标签
      - 浏览量 - read - number
      - 点赞量 - like - number
      - 评论列表 - comments - Comment.id[]
      - 内容 - content - string(rich)
    - [x] 评论 Comment
      - 评论 id - id - number(uniq)
      - 关联类型 - relate - "article" | "comment" - 评论可以在评论下追加，也可以评论文章
      - 关联id -  relate_id - Article.id ｜ Comment.id
      - 评论人 id - commentor_id - User.id
      - 评论时间 - create_at - new Date
      - 评论内容 - content - string
      - 点赞量 - like - number
      - 回复列表 - comments - Comment.id[]
      - 评论状态 - status - "delete" | "ban" | "normal" - 用户未来在用户数据平台查看评论的生命周期和状态
    - [x] 标签 Label
      - 标签名 - label - string
      - 标签值 - value - string
    - [x] 类目 Catelog
      - 类目名 - label - string
      - 类目值 - value - string
      - 标签组 - labels - Label[]
  - [ ] 用户埋点
    - 收集用户点击信息，可以后续放在后台管理数据页面中进行展示
  - [ ] 后台管理数据页面
    - [ ] 各用户数据展示
      - [ ]用户行为展示
      - [ ]用户信息展示
    - [ ] 审批流程页面
      - [ ] 文章提交审批流程页面，包括预览、推进、驳回
      - [ ] 文章审批流程显示，展示预发表文章状态
  - 主页面
    - [ ] 主体内容展示文章项，文章项内容包括标题，标题符号🔥，图片，摘要文字，作者，阅读数，点赞
    - [ ] 隔 10 个文章显示基于阅读偏好推荐作者列表，建议用 swiper freedom 的形式展示
    - [x] 主页面文章宽度监控，以改变 ellipsis 的字数
    - [ ] 工具栏（左侧）：基本完善，差滑动跟随（fixed）
    - [ ] 信息栏（右侧）：基本完善，差滑动跟随（fixed）
      - [ ] ListItem 组件缺少换一换，查看更多
- 设置
  - [ ] 主体颜色切换
- [ ] 银行 app 界面
- [ ] 个人博客