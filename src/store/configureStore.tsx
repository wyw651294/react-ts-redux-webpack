import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { StoreState } from '../types/index'; //容器存储允许的数据类型
import initState from './initState'; //初始默认数据
export default function () {
  const store = createStore<StoreState>(enthusiasm, initState);
  return store;
}