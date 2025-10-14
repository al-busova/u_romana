import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from './PrivateRoute';
import { LeftSide } from './LeftSide/LeftSide';
import { MainBody } from './LeftSide/LeftSide.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsGetCurrentUser,   selectIsLoading } from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';

const GoodsPage = lazy(() => import('../pages/GoodsPage/GoodsPage'));
const OurHistoryPage = lazy(() =>
  import('../pages/OurHistoryPage/OurHistoryPage')
);
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const DeliveryPayPage = lazy(() =>
  import('../pages/DeliveryPayPage/DeliveryPayPage')
);
const Basket = lazy(() => import('../pages/BasketPage/BasketPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFetchingCurrentUser = useSelector(selectIsGetCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isLoading ? (
    <>loading...</>
  ) : (
    !isFetchingCurrentUser && (
      <MainBody>
        <LeftSide />
        <Suspense>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/goods"
                element={
                  <PublicRoute>
                    <GoodsPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/ourhistory"
                element={
                  <PublicRoute>
                    <OurHistoryPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PublicRoute>
                    <ContactsPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/deliverypay"
                element={
                  <PublicRoute>
                    <DeliveryPayPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/basket"
                element={
                  <PublicRoute>
                    <Basket />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<p>Page not found.</p>} />
            </Route>
          </Routes>
        </Suspense>{' '}
      </MainBody>
    )
  );
};
