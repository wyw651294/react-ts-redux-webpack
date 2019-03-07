import Game from "../components/Game";
import * as gameActions from "../actions/game";
import { GameState } from "../types/game";
import { connect, Dispatch } from "react-redux";

export function mapStateToProps({
  gameType
}: GameState) {
  return {
    gameType
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<gameActions.ADD_GAME_TYPE>
) {
  return {
    addGameType: () => dispatch(gameActions.addGameType()),
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
)(Game);
