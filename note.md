## React 17

- 没有什么明显的新特性 和 React16 的使用是一致的
- React16 事件绑定到 document
- React17 事件绑定到 root 组件 => 有利于多个 React 版本共存 比如微前端

## 安装脚手架

- `npm install -g create-react-app`

## jsx 语法

## 基本使用

- 变量、表达式 使用 `{}` 包裹
- class 设置 使用 className 设置
  - `<p className="title">设置 css class</p>`
- style
  - 写一个变量对象
  - 内联写法
- 原生 html
  - 标签上加 dangerouslySetInnerHTML 属性
  - 将字符串放在一个对象的 `__html` 属性上
- 加载组件
  - 和原生标签一样使用
- 事件
  - 一般方法: 需要修改事件方法的 this `使用bind`
  - 箭头函数方法: this 默认指定当前实例
  - 事件函数默认最后一个参数是事件对象
    - event 并不是原生事件对象 而是一个合成事件对象 SyntheticEvent 模拟了 DOM 事件所有能力
- 表单
  - 受控组件
  - 非受控组件
- 组件
  - class 组件
  - 函数组件
    - 没有 state
- setState
  - 不可变值
    - 不能直接修改 state 中的值 => 无效
    - 修改数组
    - 修改对象 Object.assign ...解构
    - 都需要在 setState 中修改才有效
  - 异步或同步
    - 直接在 render 中使用 默认是异步的 可以在回调函数中拿到最新值
    - setTimeout 中 setState 是同步的
    - DOM 事件回调函数中的 setState 是同步的
  - 是覆盖还是合并
    - 直接传入对象 就是异步的时候 会被覆盖 直接以最后一个为准
    - 传入一个函数 因为后面会一个一个执行

## 组件通讯

- 父子组件
  - 父组件中 => 将变量绑定到组件属性上
  - 子组件中 => this.props

## 组件生命周期(https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- 挂载时
  - constructor
  - render
  - 更新 dom 和 refs
  - componentDidMount
- 更新时
  - New Props、setState、forceUpdate
  - shouldComponentUpdate
  - render
  - 更新 dom 和 refs
  - componentDidUpdate
- 卸载时
  - componentWillUnMount

## 高级

- 函数组件
  - 纯函数 输入 props 输出 jsx
  - 没有实例、声明周期、state
- 非受控组件
  - ref
  - defaultValue defaultChecked
  - 手动操作 dom 元素
  - React.createRef
- Portal
  - 将组件渲染到指定的 dom 中
  - ReactDOM.createPortal
- context
  - 组件跨层级传递数据
  - React.createContext
    - 类组件: 静态属性 contextType
    - 函数组件: ThemeContext.Consumer => value
- 异步组件
  - import
  - React.Suspense
  - React.lazy
- 高阶组件
- render props

## 性能优化

- shouldComponentUpdate
  - 为什么需要
    - 默认父组件更新 子组件会默认更新 这样可能就会导致一些没必要的更新
      - 比如: A B C 三个组件 A 的数据变化导致 B C 也更新 但是 B C 依赖的数据可能并没有变化
  - 默认返回 true
  - 必须配合不可变值使用
