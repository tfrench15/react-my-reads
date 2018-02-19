import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

/*

The DisplayBooks component takes in bookshelves
and renders the books in the correct shelf.

Attribution: I received help on this component from my 
friend Cosmo Wolfe.  (@cozmo on GitHub).

*/

class DisplayBooks extends Component {
	render() {
		return (
			<div className="list-books">
			  <div className="list-books-title">
			    <h1>MyReads</h1>
			  </div>
			  <div className="list-books-content">
			    <div>
			      {this.props.bookshelves.map((bookshelf) => (
			      	<div className="bookshelf" key={bookshelf.id}>
			  		  <h2 className="bookshelf-title">{bookshelf.name}</h2>
			            <div className="bookshelf-books">
			              <ol className="books-grid">
			                {this.props.books.filter((book) => bookshelf.id === book.shelf)
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
			        ))}
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

					