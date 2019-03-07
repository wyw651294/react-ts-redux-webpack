import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { game } from '../reducers/game';
import { StoreState } from '../types/index'; //容器存储允许的数据类型
import { GameState } from '../types/game'; //容器存储允许的数据类型
import initState from './initState'; //初始默认数据
import gameInitState from './gameInitState'; //初始默认数据
export default function () {
  const store = createStore<StoreState>(enthusiasm, initState);
  const gameStore = createStore<GameState>(game, gameInitState);
  return Object.assign(store,gameStore);
}