import {
  WrapperIcons
} from './TopHeaderIcons.styled';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';

export const TopHeaderIcons = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUser);

  return (
    <WrapperIcons>
      <NavLink to="/basket">
        <FaShoppingBasket color="white" />
        <p style={{ color: 'white' }}>Кошик</p>
      </NavLink>
      {isLoggedIn ? (
        <NavLink to="/profile">
          <IoPerson color="white" />{' '}
          <p style={{ color: 'white' }}>{userInfo.name}</p>
        </NavLink>
      ) : (
        <></>
      )}
    </WrapperIcons>
  );
};
