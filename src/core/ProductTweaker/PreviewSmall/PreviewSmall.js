import React from 'react';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';

const SmallPreview = styled.div`
  display: flex;
  width: 200px;
  position: relative;
`;

const ItemsWrapper = styled.div`
  flex: 1;
  background: gray;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 8px;
`;

const CaretButton = styled.button`
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.73);

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.25);
  }

  &:active {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const IconStyle = `
    width: 8px;
`;

class PreviewSmall extends React.Component {
  state = {
    selectedPreview: 0
  };

  rotatePreview = (delta) => {
    this.setState({ selectedPreview: this.state.selectedPreview + delta });
  };

  render() {
    const { previews } = this.props;

    return (
      <SmallPreview>
        <ItemsWrapper></ItemsWrapper>
        <ButtonsWrapper>
          <CaretButton
            onClick={() => this.rotatePreview(-1)}
            aria-label="Next image"
          >
            <Icon name="caret-left" style={IconStyle} />
          </CaretButton>
          <CaretButton
            onClick={() => this.rotatePreview(1)}
            aria-label="Previous image"
          >
            <Icon name="caret-right" style={IconStyle} />
          </CaretButton>
        </ButtonsWrapper>
      </SmallPreview>
    );
  }
}

export default PreviewSmall;
