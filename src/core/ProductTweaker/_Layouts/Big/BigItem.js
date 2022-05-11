import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../../AttributeSet/ColorPicker';
import CountPicker from '../../AttributeSet/CountPicker';
import SizePicker from '../../AttributeSet/SizePicker';

import PreviewSmall from '../../PreviewSmall/';
import { BigItemWrapper, ItemHeading } from '../../productTweaker.css';

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
        <PreviewSmall
          previews={[
            'https://via.placeholder.com/300x300&text=A',
            'https://via.placeholder.com/300x300&text=B',
            'https://via.placeholder.com/300x300&text=C'
          ]}
        />
      </BigItemWrapper>
    );
  }
}

export default BigItem;
