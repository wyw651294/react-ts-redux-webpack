import Hello from "../components/Hello";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect, Dispatch } from "react-redux";

export function mapStateToProps({
  enthusiasmLevel,
  languageName,
  coin
}: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
    coin: coin
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onAddCoin: () => dispatch(actions.addCoin())
  };
}

export function mergeProps(
  stateProps: Object,
  dispatchProps: Object,
  ownProps: Object
) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Hello);
