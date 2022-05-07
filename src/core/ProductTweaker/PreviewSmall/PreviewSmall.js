import React from 'react';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';

const SmallPreview = styled.div`
  display: flex;
  width: 200px;
  position: relative;
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

const ItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  background: gray;
  position: relative;
  overflow: hidden;
`;

const Slider = styled.div`
  transition: all 1s ease;
  flex: 1;
  display: flex;
`;

const Item = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

class PreviewSmall extends React.Component {
  state = {
    selectedPreview: 0,
    transitionDuration: 0.25
  };

  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();

    this.leftItemRef = React.createRef();
    this.middleItemRef = React.createRef();
    this.rightItemRef = React.createRef();
  }

  componentDidMount() {
    this.initSlider();
  }

  initSlider = () => {
    this.sliderRef.current.style.transitionDuration = '0s';
    this.sliderRef.current.style.transform = `translateX(-200px)`;

    setTimeout(() => {
      this.sliderRef.current.style.transitionDuration = `${this.state.transitionDuration}s`;
      this.isTransitioning = false;
    });
  };

  rotatePreview = (delta) => {
    if (!this.isTransitioning) {
      this.isTransitioning = true;

      const sliderWidth = this.sliderRef.current.offsetWidth;

      const newPosition = -200 - sliderWidth * delta;

      this.sliderRef.current.style.transform = `translateX(${newPosition}px)`;

      const { previews } = this.props;
      const count = previews.length;

      setTimeout(() => {
        this.setState(
          {
            selectedPreview: actualIndex(
              count,
              this.state.selectedPreview + delta
            )
          },
          () => {
            // this.stateUpdated();
            this.initSlider();
          }
        );
      }, this.state.transitionDuration * 1000);
    }
  };

  render() {
    const { previews } = this.props;
    const count = previews.length;

    const itemLeft =
      previews[actualIndex(count, this.state.selectedPreview - 1)];
    const itemRight =
      previews[actualIndex(count, this.state.selectedPreview + 1)];

    const item = previews[this.state.selectedPreview];

    return (
      <SmallPreview>
        <ItemsWrapper>
          <Slider ref={this.sliderRef}>
            <Item>
              <img src={itemLeft} alt="preview" />
            </Item>
            <Item>
              <img src={item} alt="preview" />
            </Item>
            <Item>
              <img src={itemRight} alt="preview" />
            </Item>
          </Slider>
        </ItemsWrapper>
        <ButtonsWrapper>
          <CaretButton
            onClick={() => this.rotatePreview(-1)}
            aria-label="Previous image"
          >
            <Icon name="caret-left" style={IconStyle} />
          </CaretButton>
          <CaretButton
            onClick={() => this.rotatePreview(+1)}
            aria-label="Next image"
          >
            <Icon name="caret-right" style={IconStyle} />
          </CaretButton>
        </ButtonsWrapper>
      </SmallPreview>
    );
  }
}

function actualIndex(count, index) {
  return (count + index) % count;
}

export default PreviewSmall;
