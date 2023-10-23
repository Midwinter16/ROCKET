## 1.6.0
### dev
- wheel
  - QuickForm 开发
  - 目的：达到类似低平台生成表单的效果，目前的想法是先使用一个表单收集数据，然后将数据填入到 QuickForm 达到快速开发表单的效果
  - 进度：先将所有的表单中可能用到的组件收录到 QuickForm 中
## 1.7.0
### dev
- wheel
  - QuickForm 开发
  - 添加了颜色选择器，三种时间选择器，多行文本输入框，级联选择器
  - 删除单个 checkbox（switch 替代）以及删除 button（暂时想不到按钮在表单的使用场景）
  - 添加表单提交/重置按钮
  - 添加 FormMaker，实现了基本的效果
  - 将 type 和 constant 独立为一个文件

## 1.8.0
### dev
- wheel
  - QuickForm 开发
  - 现在可以通过 FormMaker 生成数据到 QuickForm 中查看

## 1.9.0
### dev
- wheel
  - QuickForm 开发
  - 添加 pinyin-pro 来进行中文转英文
  - 通过 OptionDrawer 详细配置各个表单项组件的额外属性
    - 更新普通选择框配置，基本完成常用项配置的写法
  - 后续
    - 每一个表单项组件的详细配置之后通过 drawer 来配置
    - 还缺一个生成随机 key 的库
    - FormMaker 要支持配置项可拖拽
  