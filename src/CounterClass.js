import { Component, useState } from 'react';
import './counter.css';

// camelCase
// PascalCase => react komponens
// kebab-case
// snake_case

class CounterClass extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { number: 0 };
  // }

  state = { number: 0 };

  setMax() {
    return () => {
      this.setState({ number: this.props.max });
      this.props.onChange(this.props.max);
    };
  }

  render() {
    const { min, max, onChange } = this.props;
    const { number } = this.state;
    return (
      <div className='counter'>
        <button
          className='btn btn-small btn-min'
          onClick={() => {
            this.setState({ number: min });
            onChange(min);
          }}>
          min
        </button>
        <button
          className='btn btn-big btn-decrease'
          disabled={number === min}
          onClick={() => {
            this.setState(({ number }) => {
              return { number: number - 1 };
            });
            onChange(number - 1);
          }}>
          &lt;
        </button>
        <div className='counter-value'>{number}</div>
        <button
          className='btn btn-big btn-increase'
          disabled={number === max}
          onClick={() => {
            this.setState(({ number }) => {
              return { number: number + 1 };
            });
            onChange(number + 1);
          }}>
          &gt;
        </button>
        <button className='btn btn-small btn-max' onClick={this.setMax()}>
          max
        </button>
      </div>
    );
  }
}

CounterClass.defaultProps = {
  min: 0,
  max: 10,
  onChange: () => {}
};

export default CounterClass;
