import styled from 'styled-components';
import { device } from 'Device';
import { Form, ErrorMessage, Field} from 'formik';

export const RegSection = styled.section`
padding:60px 0`;

export const RegTitle = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw700};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${p => p.theme.colors.mainText};
  text-align: center;
  margin-bottom: ${props => props.theme.space[2]}px;
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs32};
  }
`;
export const FormFormik = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.theme.space[1]}px;
  width: 300px;
  margin: 0 auto;
  button {
    margin-top: ${props => props.theme.space[3]}px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const RegLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  > span {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.fw400};
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 1.37;
  }
  @media ${device.tablet} {
  }
`;
/* export const FieldFormik = styled(Field)`
  font-family: 'Poppins, sans-serif';
  font-size: ${props => props.theme.fontSizes.fs14};
  line-height: 1.35;
  letter-spacing: 0.04em;
  border: ${props => props.theme.borders.auth};
  border-radius: ${props => props.theme.radii.br40};
  ::placeholder {
    font-family: 'Poppins, sans-serif';
  }
  :hover,
  :focus {
    cursor: pointer;
    border-color: ${props => props.theme.colors.accent};
  }
`; */
export const InputStyled = styled.input`
  font-family: 'Poppins, sans-serif' !important;
  font-weight: ${p => p.theme.fontWeights.fw400};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.37;

  &::placeholder {
    font-family: 'Poppins, sans-serif' !important;
    font-weight: ${p => p.theme.fontWeights.fw400};
    font-size: ${p => p.theme.fontSizes.fs16};
  }
`;
export const FieldFormik = props => <Field as={InputStyled} {...props} />;
export const ErrorFormik = styled(ErrorMessage)`
color: orange;
&:empty {
    display: none;
}
`;