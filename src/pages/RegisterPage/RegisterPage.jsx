import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { register, logIn } from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Container } from 'components/common/Container.styled';
import {
  RegSection,
  RegTitle,
  FormFormik,
  RegLabel,
  ErrorFormik,
  FieldFormik,
  InputStyled,
} from './RegisterPage.styled';

const Registration = () => {
  const nameIdReg = nanoid();
  const surnameIdReg = nanoid();
  const emailIdReg = nanoid();
  const phoneIdReg = nanoid();
  const passwordIdReg = nanoid();
  const confirmPasswordIdReg = nanoid();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).max(16).required(),
    phone: yup
      .string()
      .length(13, 'Номер должен содержать 13 символов, включая +')
      .matches(
        /^\+380\d{9}$/,
        'Введите корректный номер в формате +380XXXXXXXXX'
      )
      .required('Номер телефона обязателен'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Паролі не співпадають')
      .required('Підтвердіть пароль'),
  });

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword:''
  };

 const handleSubmit = ({ name, email, surname, password, phone }) => {
   dispatch(register({ name, surname, email, password, phone })).then(resp => {
     if (resp.meta.requestStatus === 'fulfilled') {
       toast.success('Реєстрація пройшла успішно!');
       dispatch(logIn({ email, password })).then(loginResp => {
         if (loginResp.meta.requestStatus === 'fulfilled') {
           toast.success('Вхід виконано!');
           navigate('/goods', { replace: true });
         } else {
           toast.warn('Не правильна пошта чи пароль!');
         }
       });
     } else {
       toast.warn('Помилка при реєстрації!');
     }
   });
 };

  return (
    <main>
      <RegSection>
        <Container>
          <RegTitle>Реєстрація</RegTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <FormFormik autoComplete="off">
              <RegLabel htmlFor={nameIdReg}>
                <span>Ім'я*:</span>
                <FieldFormik
                  id={nameIdReg}
                  type="text"
                  name="name"
                  placeholder="Пилип"
                />
              </RegLabel>
              <ErrorFormik name="name" component="p" />
              <RegLabel htmlFor={nameIdReg}>
                <span>Прізвище*:</span>
                <Field
                  as={InputStyled}
                  id={surnameIdReg}
                  type="text"
                  name="surname"
                  placeholder="Перепілка"
                />
              </RegLabel>
              <ErrorMessage name="surname" component="p" />
              <RegLabel htmlFor={emailIdReg}>
                <span>Пошта*:</span>
                <Field
                  id={emailIdReg}
                  type="email"
                  name="email"
                  placeholder="my.email@gmail.com"
                />
              </RegLabel>
              <ErrorMessage name="email" component="p" />
              <RegLabel htmlFor={phoneIdReg}>
                <span>Контактний номер*:</span>
                <Field
                  id={phoneIdReg}
                  type="text"
                  name="phone"
                  placeholder="+380999999999"
                />
              </RegLabel>
              <ErrorMessage name="phone" component="p" />
              <RegLabel htmlFor={passwordIdReg}>
                <span>Пароль*:</span>
                <Field
                  id={passwordIdReg}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
              </RegLabel>
              <ErrorMessage name="password" component="p" />
              <RegLabel htmlFor={confirmPasswordIdReg}>
                <span>Підтвердження пароля*:</span>
                <Field
                  id={confirmPasswordIdReg}
                  type="password"
                  name="confirmPassword"
                  placeholder="Повторити пароль"
                />
              </RegLabel>
              <ErrorMessage name="confirmPassword" component="p" />
              <button type="submit">
                {isLoading ? <>Loading...</> : <>Зареєструватися</>}
              </button>
            </FormFormik>
          </Formik>{' '}
        </Container>
      </RegSection>
    </main>
  );
};
export default Registration;
