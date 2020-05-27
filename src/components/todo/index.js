import React, { Component } from 'react'
// import React, { useState } from 'react'
import Input from './input/index'
import List from './list/index'
import Filter from './filter/index'

class Todo extends Component {
  constructor (props) {
    super(props) // super就是把props传到父
    this.state = {
      list: []
    }
  }
  render () {
    return (
      <div>
        <section className="todoapp">
          <Input addValue={this.addValue.bind(this)}/>
          <List list={this.state.list}/>
          <Filter />
          </section>        
      </div>
    )
  }

  // function Todo() {
  //   const [list, setList] = useState([])

  //   return (
  //     <div>
  //       <section className="todoapp">
  //         <Input addValue={this.addValue.bind(this)}/>
  //         <List list={this.state.list}/>
  //         <Filter />
  //         </section>        
  //     </div>
  //   )
  // }
  // 增加元素 
  addValue (value) {
    // console.log(this.state.value)
    const currentList = this.state.list
    const lastTodo = this.state.list[this.state.list.length - 1]
    const valueObj = {
      id: !lastTodo ? 1 : lastTodo.id + 1,
      value: value,
      completed: false
    }
    this.setState({
      list: currentList.concat(valueObj)
    })
  }
}

export default Todo