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
- 优化渲染，将 useEffect 中多个 setState 改为使用 unstable_batchedUpdates 一次渲染，减少渲染次数


## 未来版本 

- 全局
  - Trace：点击行为跟踪上报，统计用户行为
  - SSwiper：更高度封装的 Swiper 组件，最大限度方便使用
- todo
  - 添加视图切换，列表 - 卡片 - 日历
  - 待办项数据统计
  - 待办类型增加：重复型的任务
  - 任务类型过滤
-  设置
  - 主体颜色切换