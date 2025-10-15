import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { register, logIn } from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const nameIdReg = nanoid();
  const surnameIdReg = nanoid();
  const emailIdReg = nanoid();
  const phoneIdReg = nanoid();
  const passwordIdReg = nanoid();
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
  });

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phone: '',
  };

 const handleSubmit = ({ name, email, surname, password, phone }) => {
   dispatch(register({ name, surname, email, password, phone })).then(resp => {
     if (resp.meta.requestStatus === 'fulfilled') {
       toast.success('Реєстрація пройшла успішно!');

       // ✅ логин только после успешной регистрации
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
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor={nameIdReg}>
            <span>Ім'я</span>
            <Field
              id={nameIdReg}
              type="text"
              name="name"
              placeholder="Create name"
            />
          </label>
          <ErrorMessage name="name" component="p" />
          <label htmlFor={nameIdReg}>
            <span>Прізвище</span>
            <Field
              id={surnameIdReg}
              type="text"
              name="surname"
              placeholder="Create surname"
            />
          </label>
          <ErrorMessage name="surname" component="p" />
          <label htmlFor={emailIdReg}>
            <span>Email</span>
            <Field
              id={emailIdReg}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <ErrorMessage name="email" component="p" />
          <label htmlFor={phoneIdReg}>
            <span>Phone</span>
            <Field
              id={phoneIdReg}
              type="text"
              name="phone"
              placeholder="Enter your phone"
            />
          </label>
          <ErrorMessage name="phone" component="p" />
          <label htmlFor={passwordIdReg}>
            <span>Password</span>
            <Field
              id={passwordIdReg}
              type="password"
              name="password"
              placeholder="Create password"
            />
          </label>
          <ErrorMessage name="password" component="p" />
          <button type="submit">
            {isLoading ? <>Loading...</> : <>Register</>}
          </button>
        </Form>
      </Formik>
    </main>
  );
};
export default Registration;
