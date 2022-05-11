import ColorPicker from './ColorPicker';
import SizePicker from './SizePicker';

import React from 'react';
import TextPicker from './TextPicker/TextPicker';

class AttributeSet extends React.Component {
  render() {
    const { attributes, onChange } = this.props;

    return (
      <>
        {attributes.map((attribute, index) => {
          switch (attribute.name) {
            case 'Size':
              return (
                <SizePicker
                  key={attribute.name}
                  items={attribute.items}
                  onChoice={(value) => {
                    onChange('Size', value);
                  }}
                />
              );
            case 'Color':
              return (
                <ColorPicker
                  key={attribute.name}
                  items={attribute.items}
                  onChoice={(value) => {
                    onChange('Color', value);
                  }}
                />
              );
            default:
              return (
                <TextPicker
                  key={attribute.name}
                  items={attribute.items}
                  name={attribute.name}
                  onChoice={(value) => {
                    onChange(attribute.name, value);
                  }}
                />
              );
          }
        })}
      </>
    );
  }
}

export default AttributeSet;
