## React 17

- 没有什么明显的新特性 和 React16 的使用是一致的
- React16 事件绑定到 document
- React17 事件绑定到 root 组件 => 有利于多个 React 版本共存 比如微前端

## 安装脚手架

- `npm install -g create-react-app`

## jsx 语法

### 基本使用

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

### 组件通讯
