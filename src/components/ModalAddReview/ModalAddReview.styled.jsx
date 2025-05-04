import styled from 'styled-components';
import { device } from 'Device';
export const FormReview = styled.form`
  margin-top: 15px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const ReviewBody = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
 > p {
  margin-bottom: 5px;
 }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const DateStyled = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const InputName = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  margin: 5px 0;
  outline: none;
  transition: border-color 250ms ease;
  &:hover,
  &:focus {
    cursor: pointer;
    border-color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const TextField = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  margin: 5px 0;
  resize: none;
  outline: none;
  transition: border-color 250ms ease;
  &:hover, &:active,
  &:focus {
    cursor: pointer;
    border-color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
export const ReviewBtn = styled.button`
  background-color: #f9cc37;
  color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.addColor};
  border: none;
  border-radius: 10px;
  padding: 6px 10px;
  display: block;
  margin: 0 auto;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  transition: color 250ms ease, background-color 250ms ease;
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.white};
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

// Фрілансер по життю
// export const RateWrapperStyled = styled.div`
//   /* display: inline-block;
//   position: relative;  &::before {
//     content: '★★★★★';
//     display: block;
//   } */

//   font-size: 30px;
//   display: flex;
//   align-items: flex-end;
//   line-height: 0.75;

//   @media ${device.tablet} {
//   }
//   @media ${device.desktop} {
//   }
// `;
// export const RateBody = styled.div`
//   position: relative;
//   &::before {
//     content: '★★★★★';
//     display: block;
//   }
// `;
// export const RateActive = styled.div`
//   position: absolute;
//   width: 0%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   overflow: hidden;
//   &::before {
//     content: '★★★★★';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     color: red;
//   }
// `;
// export const InputBoxStyled = styled.div`
//   /*
//   flex-direction: row-reverse;
//   overflow: hidden; */
//   display: flex;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;

// `;
// export const InputStyled = styled.input`
//   /* position: absolute;
//   width: 0%;
//   height: 0%;
//   top: 0;
//   left: 0;
//   opacity: 0;
//   visibility: hidden;
//   &:checked,
//   &:checked ~ label {
//     color: red;
//   } */
//   flex: 0 0 20%;
//   height: 100%;
//   opacity: 0;

//   @media ${device.tablet} {
//   }
//   @media ${device.desktop} {
//   }
// `;
// export const LabelStyled = styled.label`
//   flex: 0 0 20%;
//   height: 100%;
//   color: #fff;
//   cursor: pointer;
//   &::before {
//     content: '★';
//     display: block;
//     transition: color 0.3s ease 0s;
//   }
//   &:hover,
//   &:hover ~ &,
//   &:checked ~ &:hover {
//     color: ${props => props.theme.colors.accent};
//   }
//   @media ${device.tablet} {
//   }
//   @media ${device.desktop} {
//   }
// `;

// export const RateNumber = styled.div`
//   font-size: 50%;
//   padding-left: 10px;
//   @media ${device.tablet} {
//   }
//   @media ${device.desktop} {
//   }
// `;
