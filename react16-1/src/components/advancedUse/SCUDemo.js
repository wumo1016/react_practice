import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      age: 0
    }
  }
  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <div>age: {this.state.age}</div>
        <button onClick={this.onIncrease}>increase</button>
        <button onClick={this.onIncrease1}>increase1</button>
      </div>
    )
  }
  onIncrease = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  onIncrease1 = () => {
    this.setState({
      age: this.state.age + 1
    })
  }
  // 演示 shouldComponentUpdate 的基本使用
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count) {
      return true // 可以渲染
    }
    return false // 不重复渲染
  }
}

export default App
