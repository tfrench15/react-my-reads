import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class DisplayBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		bookshelves: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	}

	render() {
		const { books, bookshelves, changeShelf } = this.props 

		return (
			<div className="list-books">
			  <div className="list-books-title">
			    <h1>MyReads</h1>
			  </div>
			  <div className="list-books-content">
			    <div>
			      <Bookshelf
			        key={bookshelf.id}
			        books={books}
			        id={bookshelf.id}
			        name={bookshelf.name}
			        changeShelf={changeShelf} 
			      />
			    </div>
			  </div>
			  <div className="open-search">
			    <Link to="/search">Search for Books</Link>
			  </div>
			</div>
		)
	}
}

export default DisplayBooks