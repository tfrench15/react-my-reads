import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

/*

The SearchForBooks Component controls the `/search` page.
It allows a user to search for books and renders an array 
of books that match that query.

*/

class SearchForBooks extends Component {
	state = {
		query: '',
		books: []
	}

	static propTypes = {
		changeShelf: PropTypes.func.isRequired,
		booksOnShelf: PropTypes.array.isRequired
	}

	getBooksOnShelf = (searchResults, booksOnShelf) => {
		return searchResults.map((result) => {
			let index = booksOnShelf.findIndex((book) => {
				return book.id === result.id
			})
			if (index !== -1) {
				result.shelf = booksOnShelf[index].shelf
			} else {
				result.shelf = 'none'
			}
			return result
		})
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim(),
		})

		if (query) {
			BooksAPI.search(query).then((results) => {
				if (!results.error) {
					results = this.getBooksOnShelf(results, this.props.booksOnShelf)
					this.setState({
						books: results
					})
				} else {
					this.setState({ books: [] })
				}
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		const results = this.getBooksOnShelf(this.state.books, nextProps.booksOnShelf)
		this.setState({
			books: results
		})
	}


	render() {
		const { books, query } = this.state
		const { changeShelf, book } = this.props
		return (
			<div className="search-books">
			  <div className="search-books-bar">
			    <Link to="/" className="close-search">Close</Link>
			    <div className="search-books-input-wrapper">
			      <input
			        type="text"
			        placeholder="Search by title or author"
			        value={query}
			        onChange={(event) => this.updateQuery(event.target.value)}
			      />
			    </div>
			  </div>
			  <div className="search-books-results">
			    <ol className="books-grid">
			      {books.map((book) => (
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

export default SearchForBooks
