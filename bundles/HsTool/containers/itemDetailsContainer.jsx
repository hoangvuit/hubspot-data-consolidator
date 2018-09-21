import { connect } from 'react-redux';
import ItemDetails from '../components/ItemDetails';

const mapStateToProps = (state) => ({
	data: state.resultItem.data,
});

export default connect(mapStateToProps)(ItemDetails);

