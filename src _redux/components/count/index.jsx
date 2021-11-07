import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

class Count extends Component {
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    const { value } = this.selectedNum
    store.dispatch(createIncrementAction(value * 1))
  }

  decrement = () => {
    const { value } = this.selectedNum
    store.dispatch(createDecrementAction(value * 1))
  }

  isOdd = () => {
    const { value } = this.selectedNum
    const count = store.getState()
    if (count % 2 !== 0) store.dispatch(createIncrementAction(value * 1))
  }

  isAsync = () => {
    const { value } = this.selectedNum
    store.dispatch(createIncrementAsyncAction(value * 1, 500))
  }

  render() {
    return (
      <div>
        <h1>Now: {store.getState()}</h1>
        <select ref={(c) => (this.selectedNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.isOdd}>isOdd</button>&nbsp;&nbsp;
        <button onClick={this.isAsync}>isAsync</button>&nbsp;&nbsp;
      </div>
    )
  }
}

export default Count
