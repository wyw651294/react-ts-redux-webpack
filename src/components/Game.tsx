import * as React from 'react';
const style = require('./hello.css');

export interface Props {
  gameType: string[];
  addGameType?: () => void;
}

export default class Game extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { gameType, addGameType} = this.props;

    return (
      <div className={style.hello}>
        {
            gameType.map((item,index) => {
                return <span className={style.greeting} key={index}>{item}</span>
            })
        }
        <button onClick={addGameType}>+</button>
      </div>
    );
  }
}
