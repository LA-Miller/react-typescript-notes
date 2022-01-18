import { nextTick } from "process";
import React from "react";

type ClockState = {
  time: Date;
};

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
}

class Clock extends React.Component<AcceptedProps, ClockState> {
  constructor(props: AcceptedProps) {
    super(props);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentWillMount() {
      this.tick();
  }

  componentDidMount() {
      setInterval(() => this.tick(), 1000);
  }

  render() {
    return <div>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
    </div>;
  }
}

export default Clock;
