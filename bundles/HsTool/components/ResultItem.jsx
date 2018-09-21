import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Utils from '../lib/Utils';

class ResultItem extends Component {
	static propTypes = {
		item: PropTypes.object,
	}

	viewDetails = (data) => {
		const {setItemData} = this.props;
		setItemData(data);
		window.setTimeout(() => {
			Utils.showPopup('#item-details');
		}, 100);
	}

	render(){
		const {item} = this.props;

		return(
			<li className="js-paged-item"><a onClick={() => this.viewDetails(item)} href="javascript:void(0);">{item.result}</a></li>
		);
	}

}

export default ResultItem;