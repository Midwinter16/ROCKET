# README

## 工具
- umi-max
- antd
- antd G2Plot
- Swiper
- ahooks
- lodash
- Slate

## 更新内容

- 目前主要更新 community，打造一个较为完善的社区页面

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
    - [x] 用户其他信息 OtherInfo
    - [ ] 行为追踪 Track
      - 待考虑
    - [x] 文章 Article
    - [x] 评论 Comment
    - [x] 标签 Label
    - [x] 类目 Catelog
    - [x] 消息提示 Message
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
    - [x] 工具栏（左侧）：基本完善，差滑动跟随（fixed）
    - [x] 信息栏（右侧）：基本完善，差滑动跟随（fixed）
      - [ ] ListItem 组件缺少换一换，查看更多
  - 用户页面
    - 增删查改个人信息、文章、关注的标签用户文章点赞等等等等
  - 编辑页面
    - 用 Slate 做富文本编辑器
    - 操作栏包括保存为草稿（文章进入草稿）、发布（文章进入审核）、个人头像
  - 消息页面
    - [ ] 展示评论、赞和收藏、粉丝、私信和系统消息页面
- 设置
  - [ ] 主体颜色切换
- [ ] 银行 app 界面
- [ ] 个人博客