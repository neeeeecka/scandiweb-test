import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from './counterSlice';
// import styles from "./Counter.module.css";

class Counter extends React.Component {
  //   const count = useSelector((state) => state.counter.value);
  //   const dispatch = useDispatch();

  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => increment()}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => decrement()}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
