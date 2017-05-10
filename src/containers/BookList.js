import React, { Component } from 'react'
import { connect } from 'react-redux' // glue between react and redux
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

// if component should be aware of state, promote it to a container
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return <li key={book.title} className="list-group-item">{book.title}</li>
    })
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// if state ever changes, this container will auto re-render
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// anything returned from this function becomes props on BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// take component, give it some part of state as props, and return a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
