import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        {/*this를 쓰는 이유는 클래스내의  변수와 클래스 밖의 변수가 이름이
        같을 경우, 그것을 리액트가 식별하기 위해*/}

        <h1>return The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
