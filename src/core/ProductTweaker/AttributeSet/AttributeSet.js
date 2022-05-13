import ColorPicker from './ColorPicker';
import SizePicker from './SizePicker';

import React from 'react';
import TextPicker from './TextPicker/TextPicker';

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

          switch (attribute.name) {
            case 'Size':
              return (
                <SizePicker
                  activeChoice={selectedAttributes[attribute.id]}
                  key={attribute.name}
                  items={attribute.items}
                  onChoice={choiceHandler}
                />
              );
            case 'Color':
              return (
                <ColorPicker
                  activeChoice={selectedAttributes[attribute.id]}
                  key={attribute.name}
                  items={attribute.items}
                  onChoice={choiceHandler}
                />
              );
            default:
              return (
                <TextPicker
                  activeChoice={selectedAttributes[attribute.id]}
                  key={attribute.name}
                  items={attribute.items}
                  name={attribute.name}
                  onChoice={choiceHandler}
                />
              );
          }
        })}
      </>
    );
  }
}

export default AttributeSet;
