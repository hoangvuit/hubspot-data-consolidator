import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { updateSearchStr } from '../actions/searchFormActionCreator';
import { fetchItems } from '../actions/resultsListActionCreator';

const mapStateToProps = (state) => ({
	searchStr: state.searchForm.searchStr || '',
	contentType: state.typeSelector.contentType,
});
const mapDispatchToProps = (dispatch) => ({
	updateSearchStr: (searchStr) => dispatch(updateSearchStr(searchStr)),
	fetchItems: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

