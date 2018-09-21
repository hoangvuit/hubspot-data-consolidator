import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageItem from './PageItem';

class ItemDetails extends Component {
	static propTypes = {
		data: PropTypes.object,
	}

	render(){
		const {details: info} = this.props.data;
		if (info){
			return(
				<PageItem info={info} />
			);
		} else {
			return (
				<div className="modal fade" id="item-details" tabIndex="-1" role="dialog" aria-labelledby="item-details" aria-hidden="true">
				  <div className="modal-dialog modal-lg" role="document">
				  </div>
				</div>
			);
		}
	}

}

export default ItemDetails;