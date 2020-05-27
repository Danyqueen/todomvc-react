import React, { Component } from 'react'

class Input extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <header className="header">
        {/* <h1>todos</h1> */}
        <input
          onKeyDown={this.handleNewTodoDown.bind(this)}
          className="new-todo" placeholder="What needs to be done?" autoFocus/>
      </header>
    )
  }

  // 回车后新增数据到列表
  handleNewTodoDown (e) {
    const {target, keyCode} = e
    if (keyCode !== 13) {
      return
    }
    const inputValue = target.value.trim()
    if (!inputValue.length) {
      return
    }
    // console.log(e.target.value, '----------------',this.state.value)
    // 更新数据只能用setState
    this.setState({
      value: inputValue
    })

    const addValue = this.props.addValue
    addValue(inputValue)

    target.value = ''
  }
}

export default Input