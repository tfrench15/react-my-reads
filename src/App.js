import React from 'react'
import Book from './Book'
import DisplayBooks from './DisplayBooks'
import { Link, Route } from 'react-router-dom'
import SearchForBooks from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

/*

The BooksApp Component is the main app.  It
allows a user to move books between shelves
and search for new titles.

Attribution: I received help on this component from my 
friend Cosmo Wolfe.  (@cozmo on GitHub).

*/

class BooksApp extends React.Component {
  state = {
    books: []
  }

  bookShelves = [
    {
      id: "currentlyReading",
      name: "Currently Reading"
    },
    {
      id: "wantToRead",
      name: "Want to Read"
    },
    {
      id: "read",
      name: "Read"
    }
  ]

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState({
        books: this.state.books.filter((b) => b.id !== book.id).concat([ book ])
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchForBooks
            changeShelf={this.changeShelf}
            booksOnShelf={this.state.books}
          />
        )}/> 
        <Route exact path="/" render={() => (
          <DisplayBooks
            books={this.state.books}
            bookshelves={this.bookShelves}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
