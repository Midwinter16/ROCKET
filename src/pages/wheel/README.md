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

## 1.9.1
### dev
- wheel
  - QuickForm 开发
  - 通过 OptionDrawer 详细配置各个表单项组件的额外属性
    - 更新普通选择框配置，基本完成常用项配置的写法
  - 后续
    - 每一个表单项组件的详细配置之后通过 drawer 来配置
    - 还缺一个生成随机 key 的库
    - FormMaker 要支持配置项可拖拽
  
## 1.9.2
### dev
- wheel
  - QuickForm 开发
  - OptionDrawer 现已支持所有输入框类型
  - 如何保存是难度，主要难度在于如果渲染 React.Element 应该如何保存
    - 解决了如何保存的问题，方法为在传递时使用可传递对象，解析时使用可解析对象，详情查看组件内说明
    - 并重构了大部分的代码，将大部分逻辑独立
  - 取消开发，原因是因为即使开发出来，应用到公司层面上无法做快速开发，根本原因是 QuickForm 不上 npm 会造成很多麻烦
  - 可以类似于这个思路，使用通用开发思路写出 FormItem 来实现快速开发
  - 未来以写通用组件为主，该组件只开发到了 Input，思路较为完善，保留当做记录，10 月 24 日 16:17