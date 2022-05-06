import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
  display: flex;
  width: 50%;
`;

const LeftBarWrapper = styled.div`
  width: 120px;
  padding-right: 40px;
  padding-left: 5px;
  overflow: auto;
`;

const RightBarWrapper = styled.div`
  flex: 1;
`;

const SmallPreviewButton = styled.button`
  transition: all 0.25s ease;
  width: 100%;
  margin-bottom: 30px;
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

class BigPreview extends React.Component {
  render() {
    return (
      <PreviewWrapper>
        <LeftBarWrapper>
          <SmallPreviewButton aria-label="Preview Button">
            <img src="https://via.placeholder.com/100x100" alt="preview" />
          </SmallPreviewButton>
          <SmallPreviewButton aria-label="Preview Button">
            <img src="https://via.placeholder.com/100x100" alt="preview" />
          </SmallPreviewButton>
          <SmallPreviewButton aria-label="Preview Button">
            <img src="https://via.placeholder.com/100x100" alt="preview" />
          </SmallPreviewButton>
        </LeftBarWrapper>
        <RightBarWrapper>
          <BigPreviewImg src="https://via.placeholder.com/300x300" />
        </RightBarWrapper>
      </PreviewWrapper>
    );
  }
}

export default BigPreview;
