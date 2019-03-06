import * as constants from '../constants'

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface ADD_COIN {
  type: constants.ADD_COIN;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | ADD_COIN;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}

export function addCoin(): ADD_COIN {
  return {
    type: constants.ADD_COIN
  }
}