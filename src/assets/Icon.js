import React from 'react';
import styled from 'styled-components';

const IconStyle = styled.i`
  display: inline-block;
  width: inherit;
  height: inherit;
  background-image: url(${(props) => props.src});
  background-size: 100% 100%;
`;

class Icon extends React.Component {
  render() {
    const { name, style } = this.props;
    // const Style = styled(IconStyle)`
    //   ${style}
    // `;
    return <IconStyle src={`/assets/${name}.svg`} style={style} />;
  }
}

export default Icon;
