class CartItem {
  selectedAttributes = {};
  id = null;

  constructor(product, selectedAttributes, quantity = 0) {
    this.quantity = quantity;

    if (product) {
      const productCopy = structuredClone(product);
      this.id = productCopy.id;

      if (selectedAttributes) {
        this.selectedAttributes = structuredClone(selectedAttributes);
      } else {
        const attributesCopy = productCopy.attributes;

        attributesCopy.forEach((attribute) => {
          this.selectedAttributes[attribute.id] = attribute.items[0].id;
        });
      }
    }
  }

  get copy() {
    return new CartItem(this, this.selectedAttributes, this.quantity);
  }

  selectAttribute(attributeId, value) {
    const newCartItem = this.copy;

    newCartItem.selectedAttributes[attributeId] = value;

    return newCartItem;
  }

  setQuantity(quantity) {
    const newCartItem = this.copy;
    newCartItem.quantity = quantity;
    return newCartItem;
  }
}

export default CartItem;
