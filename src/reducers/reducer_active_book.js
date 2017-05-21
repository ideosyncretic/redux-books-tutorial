// state argument is not entire application state, only the state this reducer is responsible for.

// ES6 allows us to set defaults (ie: “null”) for arguments that are undefined, for scenarios like initial app load where there is no selected book.
export default function (state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload
  }
  return state
}
