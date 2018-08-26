import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined')
  };

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(this.props);
    // console.log(nextProps.data === this.props.data);

    return nextProps.data !== this.props.data;
  }
  //rerendering을 줄이기 위해서 데이터가 달라질 때에만 virtual Dom에 rendering 하도록 한다.

  render() {
    console.log('render PhoneInfoList');
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(info => (
      <PhoneInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
