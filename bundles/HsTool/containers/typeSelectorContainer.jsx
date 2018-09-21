import { connect } from 'react-redux';
import TypeSelector from '../components/TypeSelector';
import { changeType } from '../actions/typeSelectorActionCreator';
import { fetchItems } from '../actions/resultsListActionCreator';

const mapStateToProps = (state) => ({
	contentType: state.typeSelector.contentType || 'page',
});

const mapDispatchToProps = (dispatch) => ({
	changeType: (contentType) => {dispatch(changeType(contentType))},
	fetchItems: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelector);

