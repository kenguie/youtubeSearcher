import React, { Component } from 'react';  // must be in all components

// class SearchBar extends Component {  // must have render method and return something or will get an error
// 	render() {
// 		return <input onChange={this.onInputChange} />;  // event handler
// 	}

// 	onInputChange(event) { // event can be anything e for example
// 		console.log(event.target.value);
// 	}
// }

// condensed using ES6

class SearchBar extends Component {  // must have render method and return something or will get an error
	constructor(props) {
		super(props);

		this.state = { term: '' };  // term = search term
	}

	render() {
		return (
			<div className="search-bar">
				<input    // controlled component
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;