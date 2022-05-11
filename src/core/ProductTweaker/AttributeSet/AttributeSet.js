import ColorPicker from './ColorPicker';
import SizePicker from './SizePicker';

import React from 'react';

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
                  key={attribute.id}
                  items={attribute.items}
                  onChoice={(value) => {
                    onChange('Size', value);
                  }}
                />
              );
            case 'Color':
              return (
                <ColorPicker
                  key={attribute.id}
                  items={attribute.items}
                  onChoice={(value) => {
                    onChange('Color', value);
                  }}
                />
              );
            default:
              return null;
          }
        })}
      </>
    );
  }
}

export default AttributeSet;
