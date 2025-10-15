import { PageTitle } from 'components/common/CommonText.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, getAllUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// const user = {
//   name: 'Alona Busova',
//   email: 'alona.busova@gmail.com',
//   phone: '+380985896183',
//   birthday: '2024-05-18T14:43:52.842Z',
//   _id: '478hhfsh',
// };

const UserPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const navigate = useNavigate();

 useEffect(() => {
   if (!userData.surname) {
     dispatch(getAllUser());
     
   }
 }, [dispatch, userData]);
  return (
    <>
      {' '}
      <PageTitle>Профіль</PageTitle>
      <section>
        <h3>Особисті дані</h3>
        {userData && (
          <ul>
            <li>
              <p>Ім'я</p> <h3>{userData.name}</h3>
            </li>
            <li>
              <p>Прізвище</p> <h3>{userData.surname}</h3>
            </li>
            <li>
              <p>E-mail</p>
              <p>{userData.email}</p>
            </li>
            <li>
              {' '}
              <p>Номер телефону</p>
              <p>{userData.phone}</p>
            </li>
            <li>
              <form action="">
                Date
                <input type="date" />
                <button type="submit">Change</button>
              </form>
            </li>
            <li>
              <p>Для зміни паролю тут додати все</p>
            </li>

            <li>
              {' '}
              <p>Адреса доставки:</p>
              <p></p>
            </li>
          </ul>
        )}
        <button>Зберегти зміни</button>
      </section>
      <section>
        <h3>Подивитися список замовлень</h3>
      </section>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut()).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
              toast.success('Successfully logged out!');
              navigate('/', { replace: true });
            } else {
              toast.error('Something went wrong, please try again!');
            }
          });
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserPage;
