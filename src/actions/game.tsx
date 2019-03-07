import * as gameConstants from '../constants/game'

export interface ADD_GAME_TYPE {
  type: gameConstants.ADD_GAME_TYPE;
}

export type gameAction = ADD_GAME_TYPE;

export function addGameType(): ADD_GAME_TYPE {
  return {
    type: gameConstants.ADD_GAME_TYPE
  }
}