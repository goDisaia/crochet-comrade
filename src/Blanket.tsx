import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

type MyProps = {
};
type MyState = {
  color: string;
};

class Blanket extends React.Component<MyProps, MyState> {
  state: MyState = {
    color: 'green'
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text
            x={window.innerWidth/2 - 85}
            text="Click the blanket to change color" />
          <Rect
            x={window.innerWidth/2 - 75}
            y={20}
            width={150}
            height={150}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
          />
        </Layer>
      </Stage>
    );
  }

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };

}

export default Blanket;
