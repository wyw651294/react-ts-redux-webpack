import * as React from 'react';
const style = require('./hello.css');

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  coin: number,
  onIncrement?: () => void;
  onDecrement?: () => void;
  onAddCoin?: () => void;
}

export default class Hello extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name, enthusiasmLevel = 1,coin, onIncrement, onDecrement,onAddCoin } = this.props;
    const Img = require("../assets/images/game_01.png");

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className={style.hello}>
        <div className={style.greeting}>
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        <div>
          <span className={style.greeting} >{coin}</span>
        <button onClick={onAddCoin}>+</button>
        </div>
        <img src={Img} />
      </div>
    );
  }
}
// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
