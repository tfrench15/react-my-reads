import React, { Component } from 'react'
import { Link }, { Route } from 'react-router-dom'


class SearchForBooks extends Component {
	state = {
		query: ''
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
			</div>

			)
	}
}

export default SearchForBooks
