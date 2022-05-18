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
    const { name } = this.props;

    return <IconStyle src={`/assets/${name}.svg`} />;
  }
}

export default Icon;
