import { connect } from 'react-redux';
import ResultsList from '../components/ResultsList';
import { setData, fetchItems, doneFetching, failedFetching } from '../actions/resultsListActionCreator'

const mapStateToProps = (state) => ({
	searchStr: state.searchForm.searchStr,
	contentType: state.typeSelector.contentType,
	results: state.resultsList.results,
	needFetching: state.resultsList.needFetching
});
const mapDispatchToProps = (dispatch) => ({
	setData: (results) => dispatch(setData(results)),
	fetchItems: () => dispatch(fetchItems()),
	doneFetching: () => dispatch(doneFetching()),
	failedFetching: () => dispatch(failedFetching()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);

