import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

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
        <h1>Now: {this.props.count}</h1>
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

/*const mapStateToProps = (state) => ({ count: state })

const mapDispatchToProps = (dispatch) => (
  {
    increment: (data) => dispatch(createIncrementAction(data)),
    decrement: (data) => dispatch(createDecrementAction(data)),
    incrementAsync: (data, time) => dispatch  (createIncrementAsyncAction(data, time))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Count) */

export default connect(
  (state) => ({ count: state }),
  {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync: createIncrementAsyncAction
  }
)(Count)
