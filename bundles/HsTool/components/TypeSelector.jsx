import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeSelector extends Component {
	static propTypes = {
		contentType: PropTypes.string,
		changeType: PropTypes.func,
		fetchItems: PropTypes.func
	}

	onClickHandler(contentType){
		const {fetchItems, searchStr} = this.props;
		const {changeType} = this.props;

		changeType(contentType);
		fetchItems();
	}

	render(){
		const {contentType} = this.props;

		return (
			<div className="type-selector">
				<ul className={contentType}>
					<li><a href="javascript:void(0);" onClick={() => this.onClickHandler('page')}>Page</a></li>
					<li><a href="javascript:void(0);" onClick={() => this.onClickHandler('css')}>CSS</a></li>
					<li><a href="javascript:void(0);" onClick={() => this.onClickHandler('js')}>JS</a></li>
					<li><a href="javascript:void(0);" onClick={() => this.onClickHandler('form')}>Form</a></li>
					<li><a href="javascript:void(0);" onClick={() => this.onClickHandler('template')}>Template</a></li>
					<li><a href="javascript:void(0);" onClick={() => this.onClickHandler('blog')}>Blog</a></li>
				</ul>
			</div>
		);
	}
}

export default TypeSelector;