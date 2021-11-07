import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value * 1
    const personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h1>Person</h1>
        <h3>Now-Count: {this.props.count}</h3>
        <input ref={(c) => (this.nameNode = c)} type="text" placeholder="Enter your name" />
        <input ref={(c) => (this.ageNode = c)} type="text" placeholder="Enter your age" />
        <button onClick={this.addPerson}>Click</button>
        <ul>
          {this.props.persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name} --- {person.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    persons: state.personData,
    count: state.countData
  }),
  { addPerson: createPersonAction }
)(Person)
