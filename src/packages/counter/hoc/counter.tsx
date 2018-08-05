import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {increment,decrement} from '../actions';

const counterValue = (Component: any) => {
  const Counter = (props: any) => <Component {...props} />;

  const mapStateToProps = ({counter}: {counter: any}) => ({
    counter: counter.counter
  });


  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ increment, decrement }, dispatch);


  return connect(mapStateToProps, mapDispatchToProps)(Counter);
};

export default counterValue;
