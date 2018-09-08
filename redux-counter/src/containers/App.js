import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../lib/getRandomColor';
import * as actions from '../actions';

const App = ({ onCreate, onRemove }) => (
  <div className="App">
    <Buttons onCreate={onCreate} onRemove={onRemove} />
    <CounterListContainer />
  </div>
);

const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove()),
});

App.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
};

App.defaultProps = {
  onCreate: () => {
    console.warn('onCreate not defined');
  },
  onRemove: () => {
    console.warn('onRemove not defined');
  },
};

export default connect(
  null,
  mapToDispatch,
)(App);
