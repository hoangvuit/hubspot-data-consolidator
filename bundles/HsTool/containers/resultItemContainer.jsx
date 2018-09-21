import { connect } from 'react-redux';
import ResultItem from '../components/ResultItem';
import * as resultItemActionCreator from '../actions/resultItemActionCreator';

const mapStateToProps = (state) => ({
	data: state.resultItem.data,
});

export default connect(mapStateToProps, resultItemActionCreator)(ResultItem);

