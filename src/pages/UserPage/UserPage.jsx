import { PageTitle } from 'components/common/CommonText.styled';

const user = {
  name: 'Alona Busova',
  email: 'alona.busova@gmail.com',
  phone: '+380985896183',
  birthday: '2024-05-18T14:43:52.842Z',
  _id: '478hhfsh',
};

const UserPage = () => {

  return (
    <>
      <section>
        <PageTitle>Профіль</PageTitle>
        {user && (
          <ul>
            <li>
              <p>Ім'я</p> <h3>{user.name}</h3>
            </li>
            <li>
              <p>E-mail</p>
              <p>{user.email}</p>
            </li>
            <li>
              {' '}
              <p>Номер телефону</p>
              <p>{user.phone}</p>
            </li>
            <li>
              <form action="">
                Date
                <input type="date" />
            
                <button type="submit">Change</button>
              </form>
            </li>
          </ul>
        )}
      </section>
    </>
  );
};

export default UserPage;
