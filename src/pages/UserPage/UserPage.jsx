import { PageTitle } from 'components/common/CommonText.styled';
import { Section } from './UserPage.styled';
const user = 
  {
    name: 'Alona Busova',
    email: 'alona.busova@gmail.com',
    phone: '+380985896183',
    _id: '478hhfsh',
  };
const UserPage = () => {
  return (
    <>
      <Section>
        <PageTitle>Профіль</PageTitle>
        {user && 
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
          </ul>
        }
      </Section>
    </>
  );
};

export default UserPage;
