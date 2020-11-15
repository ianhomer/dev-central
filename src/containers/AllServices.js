import { connect } from "react-redux";
import HandleNavs from "../components/HandleNavs";

const mapStateToProps = (state) => ({
  handles: state.handles.sort((a, b) => a.name.localeCompare(b.name)),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HandleNavs);
