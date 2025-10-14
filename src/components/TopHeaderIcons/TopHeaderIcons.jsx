import {
  WrapperIcons
} from './TopHeaderIcons.styled';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const TopHeaderIcons = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <WrapperIcons>
      <NavLink to="/basket">
        <FaShoppingBasket color="white" />
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/profile">
          <IoPerson color="white" />{' '}
        </NavLink>
      )}
    </WrapperIcons>
  );
};
