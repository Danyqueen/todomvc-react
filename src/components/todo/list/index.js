import React , { Component } from 'react'

class List extends Component {
  render () {
    const list = this.props.list
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {
            list.map(item => {
              return (
                <li key={item.id} className={item.completed ? 'completed' : ''}>
                  <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={item.completed} onClick={() => this.handleClick(item)}/>
                    <label>{item.value}</label>
                    <button className="destroy" onClick={() => this.handleDestroy.bind(item)}></button>
                  </div>
                  <input className="edit" defaultValue="Rule the web"/>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }

  handleClick(item) {
    this.props.list.forEach(v => {
      if (v.id === item.id) {
        v.completed = !v.completed
      }
    })
    this.setState({
      list: this.props.list
    })
  }

  handleDestroy(item) {
    let currentList = this.props.list
    let index = currentList.findIndex(v => v.id === item.id)
    currentList.splice(index, 1)
    this.setState({
      list: currentList
    })
  }
}

export default List
