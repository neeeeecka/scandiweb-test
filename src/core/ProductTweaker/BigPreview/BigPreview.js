import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
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
