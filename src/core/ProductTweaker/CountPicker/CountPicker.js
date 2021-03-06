import React from 'react';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';
import { BigItemWrapper } from '../productTweaker.css';

const ItemCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  padding: 0 8px;

  ${BigItemWrapper} & {
    font-size: 24px;
    padding: 0 24px;
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  border: 2px solid #1d1f22;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background-color: #e7e7e7;
  }
  &:active {
    background-color: #bababa;
  }
  i {
    pointer-events: none;
  }
  ${BigItemWrapper} & {
    width: 45px;
    height: 45px;
  }

  i {
    width: 10px;
    height: 10px;
  }
`;

const Value = styled.span``;

class CountPicker extends React.Component {
  handleChange = (delta) => {
    setTimeout(() => {
      const { count, onChange } = this.props;
      onChange(count + delta);
    });
  };

  render() {
    const { count } = this.props;
    return (
      <ItemCounter>
        <Button aria-label="increment" onClick={() => this.handleChange(1)}>
          <Icon name="plus" />
        </Button>
        <Value aria-label="count">{count}</Value>
        <Button aria-label="decrement" onClick={() => this.handleChange(-1)}>
          <Icon name="minus" />
        </Button>
      </ItemCounter>
    );
  }
}

export default CountPicker;
