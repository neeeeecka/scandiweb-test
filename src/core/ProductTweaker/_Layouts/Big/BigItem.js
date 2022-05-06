import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../../ColorPicker';
import CountPicker from '../../CountPicker';
import PreviewSmall from '../../PreviewSmall/';
import { BigItemWrapper, ItemHeading } from '../../productTweaker.css';
import SizePicker from '../../SizePicker';

const ItemMenus = styled.div`
  flex: 1;
`;

const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;
`;

const ItemPreview = styled.div`
  display: flex;
  width: 200px;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

class BigItem extends React.Component {
  render() {
    return (
      <BigItemWrapper>
        <ItemMenus>
          <ItemHeading>
            <h1>Apollo</h1>
            <h2>Running Short</h2>
          </ItemHeading>
          <ItemPrice>$50.00</ItemPrice>
          <SizePicker
            activeChoice={'S'}
            choices={[
              { label: 'S', value: 'S' },
              { label: 'M', value: 'M' }
            ]}
            onChoice={(choice) => {
              console.log(choice);
            }}
          />
          <ColorPicker
            activeChoice={'#1D1F22'}
            colors={['#5ECE7B', '#1D1F22', '#0F6450']}
            onChoice={(choice) => {
              console.log(choice);
            }}
          />
        </ItemMenus>
        <CountPicker
          layout="big"
          count={0}
          onChange={(newCount) => {
            console.log(newCount);
          }}
        />
        <PreviewSmall />
      </BigItemWrapper>
    );
  }
}

export default BigItem;
