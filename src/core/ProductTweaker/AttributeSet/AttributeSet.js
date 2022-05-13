import ColorPicker from './ColorPicker';
import SizePicker from './SizePicker';

import React from 'react';
import TextPicker from './TextPicker/TextPicker';

// function PrepareAttributeSet(props) {
//   return (AttributeSetComponent) => {
//     return <AttributeSetComponent {...props} />;
//   };
// }

class AttributeSet extends React.Component {
  makeChoiceHandler = (attribute) => {
    const { onChange } = this.props;

    return (value) => {
      onChange(
        {
          id: attribute.id,
          name: attribute.name,
          type: attribute.type
        },
        value
      );
    };
  };

  render() {
    const { attributes, selectedAttributes } = this.props;

    return (
      <>
        {attributes.map((attribute) => {
          const choiceHandler = this.makeChoiceHandler(attribute);

          const props = {
            activeChoice: selectedAttributes[attribute.id],
            key: attribute.name,
            items: attribute.items,
            onChoice: choiceHandler,
            name: attribute.name
          };

          // const AttributeSetController = PrepareAttributeSet(props);

          // const SizePickerComponent = AttributeSetController(SizePicker);
          // const ColorPickerComponent = AttributeSetController(ColorPicker);
          // const TextPickerComponent = AttributeSetController(TextPicker);

          switch (attribute.name) {
            case 'Size':
              return <SizePicker {...props} />;
            case 'Color':
              return <ColorPicker {...props} />;
            default:
              return <TextPicker {...props} />;
          }
        })}
      </>
    );
  }
}

export default AttributeSet;
