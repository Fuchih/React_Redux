import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    const { value } = this.selectedNum
    this.props.increment(value * 1)
  }

  decrement = () => {
    const { value } = this.selectedNum
    this.props.decrement(value * 1)
  }

  isOdd = () => {
    const { value } = this.selectedNum
    if (this.props.count % 2 !== 0) this.props.increment(value * 1)
  }

  isAsync = () => {
    const { value } = this.selectedNum
    this.props.incrementAsync(value * 1, 1000)
  }

  render() {
    return (
      <div>
        <h1>Count</h1>
        <h3>
          Now-Count: {this.props.count} / Now-Person: {this.props.personCount}
        </h3>
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

export default connect(
  (state) => ({
    count: state.countData,
    personCount: state.personData.length
  }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count)
