import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'


class SearchForBooks extends Component {
	state = {
		query: '',
		books: []
	}

	updateQuery = (query) => {
		return this.setState({
			query: query.trim()
		})
	}


	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input 
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>	
					</div>
				</div>
					<div className="search-books-results">
						<ol className="books-grid"></ol>
					</div>
			</div>
		)
	}
}

export default SearchForBooks
