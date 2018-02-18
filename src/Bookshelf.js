import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		changeShelf: PropTypes.func.isRequired
	}

	render() {
		const { books, id, name, changeShelf } = this.props

		return (
			<div className="bookshelf">
			  <h2 className="bookshelf-title">{name}</h2>
			  <div className="bookshelf-books">
			    <ol className="books-grid">
			      {books.filter((book) => id === book.shelf)
			      	.map((book) => (
			      		<li key={book.id}>
			      		  <Book
			      		    book={book}
			      		    changeShelf={changeShelf}
			      		  />
			      		</li>
			        ))}
			    </ol>
			  </div>
			</div>
		)
	}
}

export default bookShelves


<div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>