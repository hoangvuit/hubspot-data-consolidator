import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class PageItem extends Component {
	static propTypes = {
		info: PropTypes.object,
	}

	render(){
		const {info} = this.props;
		const lastUpdated = new Date(info.updated_at);
		return(
			<div className="modal fade item-details" id="item-details" tabIndex="-1" role="dialog" aria-labelledby="item-details" aria-hidden="true">
			  <div className="modal-dialog modal-lg" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="item-details">{info.page_title}</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			      	<ul>
			      		<li className="edit-in-hs"><a href={"https://app.hubspot.com/content/443262/edit/" + info.page_id} target="_blank">Edit in Hubspot</a></li>
			      		<li><strong>Page URL:</strong> <a target="_blank" href={info.page_url}>{info.page_url}</a></li>
			      		<li><strong>Page Name:</strong> {info.page_name}</li>
			      		<li><strong>Status:</strong> {info.is_published ? <span className="published">Published</span> : <span className="draft">Draft</span>}</li>
			      		{info.meta_description &&
			      		<li><strong>Meta Description:</strong> <span>{info.meta_description}</span></li>
			      		}
			      		<li><strong>Category:</strong> {info.category === 'landing_page' ? 'Landing Page' :  'Website Page' }</li>
			      		<li><strong>Last updated:</strong> {lastUpdated.toLocaleDateString()}</li>
			      	</ul>

			      	{ info.form_id !== '' &&
      					<FormList forms={info.form_id} />
			      	}

{/*			      	{ info.css !== '' &&
      					<CssList files={info.css} />
			      	}*/}

			      	{info.screenshot &&
			      		<div className="screenshot">
			      			<hr />
			      			<strong>Screenshot:</strong>
			      			<br />
		      				<img src={info.screenshot } />
		      			</div>
		      		}
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
}

class CssList extends Component {
	static propTypes = {
		files: PropTypes.string
	}

	render(){
		const {files} = this.props;
		let filePaths = files.split(',');

		return (
			<div className="info-block">
    		<span className="block-title">CSS files</span>
  			<div className="block-content">
					<ul>
						{
							filePaths.map((path) => {
								return <li><a href={path}>{path}</a></li>
							})
						}
					</ul>
  			</div>
    	</div>
		);
	}
}

class FormList extends Component {
	static propTypes = {
		forms: PropTypes.string
	}

	render(){
		const {forms} = this.props;
		let formIds = forms.split(',');

		return (
			<div className="info-block">
    		<span className="block-title">Forms</span>
  			<div className="block-content">
					<ul>
						{
							formIds.map((formId, index) => {
								return <FormItem key={index} formId={formId} />
							})
						}
					</ul>
  			</div>
    	</div>
		);
	}
}

class FormItem extends Component {
	static propTypes = {
		formId: PropTypes.string,
	}

	constructor(){
		super();
		this.state = {formName: ''};
	}

	getFormProp = (formId, propName) => {
		api.fetchFormData(formId).then(
    	response => {
    		this.setState({
    			formName: response[propName]
  			});
	    },
	    error => {
	      console.log('fail');
	    },
		);
	}

	componentWillReceiveProps(nextProps){
		const {formId} = nextProps;
		this.getFormProp(formId, 'form_name');
	}

	componentDidMount(){
		const {formId} = this.props;
		this.getFormProp(formId, 'form_name');
	}

	render(){
		const {formId} = this.props;
		const {formName} = this.state;

		return (
			<li><a target="_blank" href={"https://app.hubspot.com/forms-two/443262/editor-two/" + formId + "/edit/form"}>{formName}</a></li>
		);
	}
}


export default PageItem;