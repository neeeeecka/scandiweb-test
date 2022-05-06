import React from 'react';
import styled from 'styled-components';

const BigPreviewWrapper = styled.div`
  display: flex;
  width: 60%;
  gap: max(10px, 2.5vw);
`;

const LeftBarWrapper = styled.div`
  width: max(80px, 8vw);
  padding: 5px;
  margin: -5px;
  overflow: hidden;
  overflow-y: auto;
`;

const RightBarWrapper = styled.div`
  flex: 1;
`;

const SmallPreviewButton = styled.button`
  transition: transform 0.25s ease;
  width: 100%;
  margin-bottom: max(10px, 2.5vw);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  img {
    width: 100%;
  }
`;

const BigPreviewImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

class PreviewBig extends React.Component {
  state = {
    selectedPreview: 0
  };

  selectPreview = (index) => {
    this.setState({ selectedPreview: index });
  };

  render() {
    const { previews } = this.props;

    const selectedImageURL = previews[this.state.selectedPreview];

    return (
      <BigPreviewWrapper>
        <LeftBarWrapper>
          {previews.map((previewURL, index) => {
            return (
              <SmallPreviewButton
                key={previewURL}
                onClick={() => this.selectPreview(index)}
              >
                <img src={previewURL} alt="preview" />
              </SmallPreviewButton>
            );
          })}
        </LeftBarWrapper>
        <RightBarWrapper>
          <BigPreviewImg src={selectedImageURL} />
        </RightBarWrapper>
      </BigPreviewWrapper>
    );
  }
}

export default PreviewBig;
