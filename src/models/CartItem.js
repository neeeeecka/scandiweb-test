import makeUniqueId from '../utils/uniqueId';

class CartItem {
  selectedAttributes = {};
  attributeHash = null;
  uid = null;
  id = null;

  constructor(product, selectedAttributes, quantity = 1) {
    this.quantity = quantity;

    if (product) {
      const productCopy = structuredClone(product);
      this.id = productCopy.id;
      this.uid = makeUniqueId();

      if (selectedAttributes) {
        this.selectedAttributes = structuredClone(selectedAttributes);
      } else {
        const attributesCopy = productCopy.attributes;

        attributesCopy.forEach((attribute) => {
          this.selectedAttributes[attribute.id] = attribute.items[0].id;
        });
      }
    }

    this.attributeHash = CartItem.makeAttributeHash(this);
  }

  static fromSerialized(serialized) {
    const newCartItem = new CartItem();

    newCartItem.id = serialized.id;
    newCartItem.uid = serialized.uid;
    newCartItem.quantity = serialized.quantity;
    newCartItem.attributeHash = serialized.attributeHash;

    newCartItem.selectedAttributes = structuredClone(
      serialized.selectedAttributes
    );
    // newCartItem.attributeHash = CartItem.makeAttributeHash(newCartItem);

    return newCartItem;
  }

  get serialized() {
    return structuredClone(this);
  }

  get copy() {
    return CartItem.fromSerialized(this.serialized);
  }

  static makeAttributeHash(cartItem) {
    // console.log('Making attribute hash for cart item: ', cartItem);
    const sorted = Object.keys(cartItem.selectedAttributes).sort((a, b) =>
      a.localeCompare(b)
    );
    let combinedString = '';
    sorted.forEach((key) => {
      combinedString += key + ':' + cartItem.selectedAttributes[key] + ';';
    });

    return simpleHash(combinedString);
  }

  newUID() {
    this.uid = makeUniqueId();
  }

  recalculateAttributeHash() {
    this.attributeHash = CartItem.makeAttributeHash(this);
  }

  selectAttribute(attributeId, value) {
    this.selectedAttributes[attributeId] = value;
    // this.attributeHash = CartItem.makeAttributeHash(this);
    this.recalculateAttributeHash();
  }

  setQuantity(quantity) {
    this.quantity = Math.max(0, quantity);
  }
}

const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};

export default CartItem;
