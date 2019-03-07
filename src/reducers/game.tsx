import { gameAction } from "../actions/game";
import { GameState } from "../types/game";
import {
 ADD_GAME_TYPE
} from "../constants/game";

export function game(
  state: GameState,
  action: gameAction
): GameState {
  switch (action.type) {
    case ADD_GAME_TYPE:
      return {
        ...state,
        gameType: [...state.gameType,"addd"]
      };
  }
  return state;
}
