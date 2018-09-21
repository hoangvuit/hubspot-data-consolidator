import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultItem from '../containers/resultItemContainer';
import Utils from '../lib/Utils';
import * as api from '../api';

class ResultsList extends Component {
	static propTypes = {
		searchStr: PropTypes.string,
		results: PropTypes.array,
		contentType: PropTypes.string,
		setData: PropTypes.func,
		needFetching: PropTypes.bool,
		doneFetching: PropTypes.func,
		failedFetching: PropTypes.func,
	}

	componentDidUpdate() {
		const {contentType, needFetching} = this.props;
		if (needFetching){
			this.fetch();
		}
		Utils.pagination.create();
	}

	fetch() {
		const {setData, contentType, searchStr, doneFetching, failedFetching} = this.props;

		api.fetchItems(contentType, searchStr).then(
	    	response => {
	    		doneFetching();
	    		setData(response);
		    },
		    error => {
		      console.log('fail');
		      failedFetching();
		    },
			);
	}

	render() {
		const {searchStr} = this.props;
		const {results} = this.props;
		let {contentType} = this.props;
		if (contentType === 'page'){
			contentType = 'page_title';
		}

		if (results.length > 0){
			return(
				<div className="search-results">
					<p className="results-title">Results found for: <strong>{searchStr}</strong></p>
					<ul className="results-list">
						{
							results.map((result, index) => {
								return	<ResultItem className="result-item" item={result} key={index} />
							})
						}
					</ul>
					<div id="pagination"></div>
				</div>
			)
		} else {
			return (
				<div className="search-results">
					<p className="results-title">No results for: <strong>{searchStr}</strong></p>
				</div>
			)
		}
	}
}

export default ResultsList;