import React from 'react';
import styled from 'styled-components';

import CountPicker from '../../CountPicker';

import PreviewSmall from '../../PreviewSmall/';
import { BigItemWrapper, ItemHeading } from '../../productTweaker.css';
import PriceSpan from '../../../PriceSpan';
import AttributeSet from '../../AttributeSet';
import ItemController from '../ItemController';

const ItemMenus = styled.div`
  flex: 1;
`;

const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
`;

class BigItem extends React.Component {
  render() {
    const { cartItem, id } = this.props;

    return (
      <ItemController cartItem={cartItem} id={id}>
        {({ product, updateAttributtes, updateQuantity }) => {
          const { name, brand, prices, gallery, description, attributes } =
            product;
          const { quantity, selectedAttributes, attributeHash, uid } = cartItem;

          return (
            <BigItemWrapper>
              <ItemMenus>
                <ItemHeading>
                  <h1>{brand}</h1>
                  <h2>{name}</h2>
                  {/* {uid} */}
                </ItemHeading>
                <ItemPrice>{prices && <PriceSpan prices={prices} />}</ItemPrice>
                {attributes && (
                  <AttributeSet
                    attributes={attributes}
                    selectedAttributes={selectedAttributes}
                    onChange={updateAttributtes}
                  />
                )}
              </ItemMenus>

              <CountPicker
                layout="big"
                count={quantity}
                onChange={updateQuantity}
              />
              <PreviewSmall previews={gallery} />
            </BigItemWrapper>
          );
        }}
      </ItemController>
    );
  }
}

export default BigItem;
