import styled from 'styled-components';
import { device } from 'Device';

export const WrapperSlider = styled.div`
  position: relative;
  height: 225px;
  width: 300px;
  overflow: hidden;
  border-radius: 10px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    height: 400px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const SlideStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => {
    if (props.position === 'activeSlide') {
      return `1`;
    } else {
      return '0';
    }
  }};
  transform: ${props => {
    if (props.position === 'nextSlide') {
      return `translate(100%)`;
    }
    if (props.position === 'lastSlide') {
      return `translate(-100%)`;
    }
    if (props.position === 'activeSlide') {
      return `translate(0)`;
    }
  }};
  transition: opacity 1000ms ease-in, transform 500ms ease-in;

  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

// export const BtnDirection = styled.button`
//   position: absolute;
//   top: 100px;
//   transform: translate(-50%);
//   background-color: green;
//   width: 40px;
//   height: 40px;
//   display: grid;
//   place-items: center;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: all 500ms ease;
//   left: ${props => {
//     if (props.direction === 'left') {
//       return `0`;
//     } else {
//       return 'initial';
//     }
//   }};
//   right: ${props => {
//     if (props.direction === 'left') {
//       return `initial`;
//     } else {
//       return '0';
//     }
//   }};
// `;
