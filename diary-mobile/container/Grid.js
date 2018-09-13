import { connect } from "react-redux";
import { actionCreators } from "../reducer";
import GridScreen from "../component/GridScreen";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  // read-only
};

const mapDispatchToProps = dispatch => {
  //null
};

const Create = connect(mapStateToProps)(GridScreen);

export default Grid;
