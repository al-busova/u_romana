import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { register} from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { Form, Field, ErrorMessage } from 'formik';

const Registration = () => {
  const nameIdReg = nanoid();
    const emailIdReg = nanoid();
    // const phoneIdReg = nanoid();
  const passwordIdReg = nanoid();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).max(16).required(),
    // phone: yup.string().min(13).max(13).required(),
  });

  const initialValues = {
    name: '',
    email: '',
      password: '',
    //   phone: ''
  };

  const handleSubmit = ({ name, email, password}) => {
    dispatch(
      register({
        name,
        email,
        password
      })
    );
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
            <span>Name</span>
            <Field
              id={nameIdReg}
              type="text"
              name="name"
              placeholder="Create name"
            />
          </label>
          <ErrorMessage name="name" component="p" />
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
          {/* <label htmlFor={phoneIdReg}>
            <span>Phone</span>
            <Field
              id={phoneIdReg}
              type="text"
              name="phone"
              placeholder="Create phone"
            />
          </label>
          <ErrorMessage name="phone" component="p" /> */}
          <button type="submit">
            {isLoading ? <>Loading...</> : <>Register</>}
          </button>
        </Form>
      </Formik>
    </main>
  );
};
export default Registration;
