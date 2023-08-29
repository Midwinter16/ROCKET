# JavaScript

## 数组

### 数组方法

| 方法        | 功能                 | 返回值                  | 是否修改原数组 |
| ----------- | -------------------- | ----------------------- | -------------- |
| push        | 向数组末尾添加元素   | 新数组长度              | ✅              |
| pop         | 删除数组最后一个元素 | 删除的元素              | ✅              |
| shift       | 删除数组第一个元素   | 删除的元素              | ✅              |
| unshift     | 向数组头部添加元素   | 新数组长度              | ✅              |
| splice      | 删除/添加/替换元素   | 删除的元素数组          | ✅              |
| slice       | 提取部分元素         | 新数组                  | ❌              |
| concat      | 连接多个数组         | 连接后的数组            | ❌              |
| join        | 数组转字符串         | 字符串                  | ❌              |
| reserve     | 反转数组             | 反转后的数组            | ✅              |
| sort        | 排序                 | 排序后的数组            | ✅              |
| filter      | 过滤数组             | 过滤后的数组            | ❌              |
| map         | 映射数组             | 映射后的数组            | ❌              |
| forEach     | 遍历数组             | ❌                       | ❌              |
| some        | 是否有元素通过       | Boolean                 | ❌              |
| every       | 是否所有元素通过     | Boolean                 | ❌              |
| find        | 查找第一个通过的元素 | 通过的元素 or undefined | ❌              |
| findIndex   | 查找索引             | 返回索引 or -1          | ❌              |
| includes    | 是否包含             | Boolean                 | ❌              |
| indexOf     | 查找元素索引         | 返回索引 or -1          | ❌              |
| lastIndexOf | 查找元素索引（从后） | 返回索引 or -1          | ❌              |
| copyWithin  | 复制元素             | 复制的数组              | ❌              |
| fill        | 用值填充数组         | 填充后的数组            | ✅              |
| flat        | 数组拉平（一层）     | 拉平后的数组            | ✅              |
| flatMap     | 映射式拉平（一层）   | 拉平后的数组            | ✅              |
| of          | 值转数组             | 新数组                  | ❌              |

## console

console.trace：打印函数的调用关系

# TypeScript

## Pick

从一个复合类型中，取出几个想要的类型的组合，如下

```js
Pick<API.SchemePageVo, 'versionId' | 'connectionId' | 'hasSuperToken' | 'project'>)
```

## Omit

用于创建一个新类型，该类型从另一个类型中排除指定的属性。

```js
Omit<T, K>
```

其中，`T`表示源类型，`K`表示要从源类型中排除的属性。

如果你想要同时排除多个属性，可以在 `Omit` 类型中使用【联合类型】来列出要排除的属性

**export type CanvasEditCache = Omit< SFCanvasDetail, 'component_edge_list' | 'layout_placeholder_data' >**

上面这段代码的意思是从SFCanvasDetail中排除掉component_edge_list【和】layout_placeholder_data

## Partial

可以将类型T的所有属性变为可选的。

Partial<T>

```js
export declare type ModelStyle = Partial<{
    [key: string]: unknown;
    style: ShapeStyle;
    stateStyles: StateStyles;
}>;
```

# Swiper

## Swiper

### props

| 属性                | 值类型                                                       | 功能                                                         | 备注                                                         |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| allowSlideNext      | Boolean                                                      | 是否允许next滑动                                             |                                                              |
| allowSlidePrev      | Boolean                                                      | 是否允许prev滑动                                             |                                                              |
| allowTouchMove      | Boolean                                                      | 是否允许触摸式滑动                                           |                                                              |
| autoplay            | Object                                                       | 自动播放                                                     |                                                              |
| modules             | Array                                                        | 模组，用于开启额外功能，例如自动播放                         |                                                              |
| initialSlide        | number                                                       | 初始化 slide 编号                                            |                                                              |
| direction           | horizontal ｜ vertical                                       | 方向 水平 ｜ 垂直                                            |                                                              |
| grabCursor          | Boolean                                                      | hover 时指针是否变手掌                                       |                                                              |
| width               | number                                                       | horizontal下生效                                             |                                                              |
| height              | Number                                                       | vertical下生效                                               |                                                              |
| autoHeight          | Boolean                                                      | 随着当前 slide 的高度而发生变化                              |                                                              |
| breakPoint          | Object                                                       | 断点改变 swiper 样式                                         | [BreakPoint](https://swiperjs.com/swiper-api#param-breakpoints) |
| effect              | Slide \| fade \| cube \| coverflow \| flip \| creative \| cards | 默认 slide，改变滑动时的样式                                 | [effect](https://swiperjs.com/swiper-api#param-effect)       |
| {effect}Effect      | Object                                                       | 设置在不同 effect 下的参数，例如 cardsEffect                 |                                                              |
| controller          | Object                                                       | 控制器相关，在 module 中                                     |                                                              |
| enabled             | Boolean                                                      | 最初是否启用 Swiper                                          |                                                              |
| FollowFinger        | Boolean                                                      | 如果禁用，则只有松开滑块时才会显示动画，手指按住滑块时不会移动 |                                                              |
| grid                | any                                                          | 用于启动多行滑块                                             | [grid](https://swiperjs.com/swiper-api#param-grid)           |
| keyboard            | any                                                          | 启用键盘操作                                                 | [keyboard](https://swiperjs.com/swiper-api#param-keyboard)   |
| loop                | Boolean                                                      | 是否开启循环                                                 |                                                              |
| loopPreventsSliding | Boolean                                                      | 开启后在 loop 过程中 slideNext/Prev 操作不生效               |                                                              |
| Mousewheel          | any                                                          | 使用鼠标滚轮导航幻灯片                                       |                                                              |
| navigation          | Any                                                          | 包含导航参数的对象，设置为 true 表示启用                     | [navigation](https://swiperjs.com/swiper-api#param-navigation) |
| speed               | number                                                       | 滑动速度                                                     |                                                              |
| Threshold           | number                                                       | 小于值时将不会触发滑动效果                                   |                                                              |
| touchAngle          | number                                                       | 滑动角度小于值时才触发滑动效果                               |                                                              |

## Module

使用 module 的方法

```jsx
// 首先要引入 modules
import {
  Navigation,
  Pagination,
} from "swiper/modules"; 

// 然后引入对应 module 的样式
import "swiper/css/navigation";
import "swiper/css/pagination";

// 最后在 swiper 中配置 module 以及对应 module 的 params
const HomePage: React.FC = () => {
  return (
    <>
      <Card>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={true}
          navigation={true}
        >
          <SwiperSlide style={{ backgroundColor: "red", height: "200px" }}>
            Slide 1
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "blue", height: "200px" }}>
            Slide 2
          </SwiperSlide>
        </Swiper>
      </Card>
    </>
  );
};
```

注意：module 名称后带 effect 的组件需要设置 swiper 的 effect 字段为对应模组，否则无法生效

例如：coverflowEffect 模组需要设置 effect 字段为 coverflow


# Webpack

现代 JavaScript 应用程序的静态模块打包器

分析项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

## 作用

1、减少请求，来达到减少性能消耗以及用户体验。从上面定义我们就可以知道，Webpack 可以将很多静态资源打包整合到一起，以前请求接口会有很多链接地址，每次请求都会向服务器询问，然后服务器返回需要js等，要是很多静态资源，将会请求很多，影响性能以及用户的体验，Webpack可以将打包的资源整合

2、将es6语法转变成es5语法，兼容老浏览器。一些老的终端机中的浏览器，兼容不到es6语法，可以通过Webpack来打包，转换成兼容的es5写法，例如es6的箭头函数等。

3、增强项目生命力，增强代码隐蔽性。不单单请求少了，性能提高了，还可以将静态资源图片、页面以及css等打包压缩，早期项目都是直接暴露出来，所以安全性隐蔽性不高，Webpack还可以提供丰富的插件。

# 问题

## 性能优化

### 通用优化

#### 懒加载

懒加载优化一般用于从一个路由跳转到另一个路由

懒加载的实现是通过 Webpack 的动态导入和 `React.lazy` 方法

懒加载不仅要考虑加载态，还要考虑加载失败之后的兜底容错

```jsx
import { Component, Suspense, lazy } from "react";

// 对加载失败进行容错处理
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>这里处理出错场景</h1>;
    }

    return this.props.children;
  }
}

const Comp = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject(new Error("模拟网络出错"));
      } else {
        resolve(import("../todo/index"));
      }
    }, 2000);
  });
});

export default function HomePage() {
  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>
        实现懒加载优化时，不仅要考虑加载态，还需要对加载失败进行容错处理。
      </div>
      <ErrorBoundary>
        <Suspense fallback="Loading...">
          <Comp />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
```



## 缓存问题

## 工程化

## 业务组件怎么理解

## 复杂业务组件怎么使其低耦合