export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action object with a type property + payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
