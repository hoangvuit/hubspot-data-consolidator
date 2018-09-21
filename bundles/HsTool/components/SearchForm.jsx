import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
	static propTypes = {
		searchStr: PropTypes.string,
		updateSearchStr: PropTypes.func,
		contentType: PropTypes.string,
		fetchItems: PropTypes.func
	}

	onChangeHandler(searchStr){
		const {updateSearchStr} = this.props;
		updateSearchStr(searchStr);

		let timer = 0;
		window.setInterval((step) => {
			if (timer === 500){
				this.search();
			}
			timer += step;
		}, 10, 10);
	}

	search(){
		const {fetchItems, contentType, searchStr} = this.props;
		fetchItems();
		return false;
	}

	render(){
		const {searchStr} = this.props;

		return (
			<div className="search-form">
				<form id="search-form"
					onSubmit={() => this.search()}
				>
					<input
						type="text"
						value={searchStr}
						className="search-string"
						required
						onChange={(e) => this.onChangeHandler(e.target.value)}
					/>
					<input
						type="submit"
						value=""
					/>
				</form>
			</div>
		)
	};
}

export default SearchForm;