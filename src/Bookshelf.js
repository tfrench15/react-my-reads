import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
	render() {
		return (
			<div className="bookshelf">
			  <h2 className="bookshelf-title">{this.props.name}</h2>
			  <div className="bookshelf-books">
			    <ol className="books-grid">
			      {this.props.books.filter((book) => this.props.id === book.shelf)
			      	.map((book) => (
			      		<li key={book.id}>
			      		  <Book
			      		    book={book}
			      		    changeShelf={this.props.changeShelf}
			      		  />
			      		</li>
			        ))}
			    </ol>
			  </div>
			</div>
		)
	}
}

export default Bookshelf