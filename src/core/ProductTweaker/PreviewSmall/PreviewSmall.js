import React from 'react';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';

const SmallPreview = styled.div`
  display: flex;
  width: 200px;
  min-height: 280px;
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

  i {
    width: 8px;
  }
`;

const ItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Slider = styled.div`
  flex: 1;
  display: flex;
`;

const Item = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

function animateTo(element, currentX, newX, seconds, callback) {
  let x = currentX;

  let lastDate = Date.now();

  let t = 0;

  const diff = newX - currentX;

  const frame = () => {
    const now = Date.now();
    const delta = (now - lastDate) / 1000;
    lastDate = now;
    t += delta;

    let done = false;

    if (t <= seconds) {
      x += (diff * delta) / seconds;
    } else {
      x = newX;
      done = true;
    }
    element.style.transform = `translateX(${x}px)`;

    if (done) {
      callback();
    } else {
      requestAnimationFrame(frame);
    }
  };
  frame();
}

class PreviewSmall extends React.Component {
  state = {
    selectedPreview: 0,
    transitionDuration: 0.2
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
    const sliderWidth = this.sliderRef.current.offsetWidth;

    this.sliderRef.current.style.transform = `translateX(-${sliderWidth}px)`;

    this.isTransitioning = false;
  };

  rotatePreview = (delta) => {
    if (!this.isTransitioning) {
      this.isTransitioning = true;

      const sliderWidth = this.sliderRef.current.offsetWidth;

      const newPosition = -sliderWidth - sliderWidth * delta;

      const { previews } = this.props;
      const count = previews.length;

      animateTo(this.sliderRef.current, -sliderWidth, newPosition, 0.2, () => {
        this.setState(
          {
            selectedPreview: actualIndex(
              count,
              this.state.selectedPreview + delta
            )
          },
          () => {
            this.initSlider();
          }
        );
      });
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
            <Item key={itemLeft}>
              <img src={itemLeft} alt="preview" />
            </Item>
            <Item key={item}>
              <img src={item} alt="preview" />
            </Item>
            <Item key={itemRight}>
              <img src={itemRight} alt="preview" />
            </Item>
          </Slider>
        </ItemsWrapper>
        {previews.length > 1 && (
          <ButtonsWrapper>
            <CaretButton
              onClick={() => this.rotatePreview(-1)}
              aria-label="Previous image"
            >
              <Icon name="caret-left" />
            </CaretButton>
            <CaretButton
              onClick={() => this.rotatePreview(+1)}
              aria-label="Next image"
            >
              <Icon name="caret-right" />
            </CaretButton>
          </ButtonsWrapper>
        )}
      </SmallPreview>
    );
  }
}

function actualIndex(count, index) {
  return (count + index) % count;
}

export default PreviewSmall;
