import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const emailIdLogin = nanoid();
  const passwordIdLogin = nanoid();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).max(16).required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    dispatch(logIn(values)).then(resp => {
      if (resp.meta.requestStatus === 'fulfilled') {
        toast.success('Вхід виконано успішно!');
        navigate('/goods', { replace: true });
      } else {
        toast.warn('Не правильна пошта чи пароль!');
      }
      return;
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
          <label htmlFor={emailIdLogin}>
            <span>Email</span>
            <Field
              id={emailIdLogin}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <ErrorMessage name="email" component="p" />
          <label htmlFor={passwordIdLogin}>
            <span>Password</span>
            <Field
              id={passwordIdLogin}
              type="password"
              name="password"
              placeholder="Create password"
            />
          </label>
          <ErrorMessage name="password" component="p" />
          <button type="submit">
            {isLoading ? <>Loading...</> : <>Login</>}
          </button>
        </Form>
      </Formik>
    </main>
  );
};
export default Login;
