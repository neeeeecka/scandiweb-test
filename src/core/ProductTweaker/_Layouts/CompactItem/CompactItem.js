import React from 'react';
import styled from 'styled-components';

import CountPicker from '../../CountPicker';

import PriceSpan from '../../../PriceSpan';
import AttributeSet from '../../AttributeSet';
import ItemController from '../ItemController';

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const ItemMenus = styled.div`
  width: 125px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const ItemHeading = styled.div`
  h1,
  h2 {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
  }
  h2 {
    padding-top: 7px;
  }
`;
const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 7px;
`;

const ItemPreview = styled.div`
  display: flex;
  flex: 1;
  background: #fcfbfc;

  & img {
    width: 100%;
    object-fit: contain;
  }
`;

class CompactItem extends React.Component {
  render() {
    const { cartItem, id } = this.props;

    return (
      <ItemController cartItem={cartItem} id={id}>
        {({ product, updateAttributtes, updateQuantity }) => {
          const { name, brand, prices, gallery, description, attributes } =
            product;
          const { quantity, selectedAttributes, attributeHash, uid } = cartItem;

          return (
            <ItemWrapper>
              <ItemMenus>
                <ItemHeading>
                  <h1>{brand}</h1>
                  <h2>{name}</h2>
                </ItemHeading>
                <ItemPrice>{prices && <PriceSpan prices={prices} />}</ItemPrice>
                <AttributeSet
                  attributes={attributes}
                  selectedAttributes={selectedAttributes}
                  onChange={updateAttributtes}
                  disabled={true}
                />
              </ItemMenus>
              <CountPicker count={quantity} onChange={updateQuantity} />
              <ItemPreview>
                <img src={gallery[0]} alt="Aplllo Running Short" />
              </ItemPreview>
            </ItemWrapper>
          );
        }}
      </ItemController>
    );
  }
}

export default CompactItem;
