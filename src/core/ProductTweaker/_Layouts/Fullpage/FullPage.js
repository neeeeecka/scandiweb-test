import React from 'react';
import styled from 'styled-components';
import { ButtonFill } from '../../../../styles/global.css';
import PreviewBig from '../../PreviewBig';
import ColorPicker from '../../ColorPicker';

import {
  BigItemWrapper,
  FullPageItemWrapper,
  ItemHeading,
  PickerLabel,
  PickerWrapper
} from '../../productTweaker.css';

import SizePicker from '../../SizePicker';

const ItemMenus = styled.div`
  width: 292px;
`;

const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;
`;

const AddToCartButton = styled(ButtonFill)`
  width: 100%;
`;

const ItemDescription = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  color: #1d1f22;
  line-height: 26px;
`;

class FullPage extends React.Component {
  render() {
    return (
      <FullPageItemWrapper>
        <PreviewBig
          previews={[
            'https://via.placeholder.com/300x300?text=hello',
            'https://via.placeholder.com/300x300?text=two',
            'https://via.placeholder.com/300x300?text=three'
          ]}
        />
        <ItemMenus>
          <ItemHeading>
            <h1>Apollo</h1>
            <h2>Running Short</h2>
          </ItemHeading>
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
          <PickerWrapper>
            <PickerLabel>Price:</PickerLabel>
            <ItemPrice>$50.00</ItemPrice>
          </PickerWrapper>
          <AddToCartButton>Add to cart</AddToCartButton>
          <ItemDescription>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </ItemDescription>
        </ItemMenus>
      </FullPageItemWrapper>
    );
  }
}

export default FullPage;
