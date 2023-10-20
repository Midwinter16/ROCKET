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