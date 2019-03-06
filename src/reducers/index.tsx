import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types/index";
import {
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  ADD_COIN
} from "../constants/index";

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
    case ADD_COIN:
      return {
        ...state,
        coin: state.coin + 1
      };
  }
  return state;
}
