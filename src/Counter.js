import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './pages/actions';


const Counter = ({ count, increment, decrement }) => {
  return (
    <div className='block'>
      <p className='block_cnt'>Count: {count}</p>
      <div className='block_btn'>
        <button className='block_dec' onClick={decrement}>-</button>
        <button className='block_inc' onClick={increment}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);