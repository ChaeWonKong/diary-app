import { connect } from "react-redux";
import { actionCreators } from "../reducer";
import HomeScreen from "../component/HomeScreen";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  const { diaries } = state;
  return {
    diaries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editDiary: bindActionCreators(actionCreators.editDiary, dispatch),
    removeDiary: bindActionCreators(actionCreators.removeDiary, dispatch)
  };
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

export default Home;
