import React, { lazy, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import PublicRoute from '../components/PublicRoute';
import { LeftSide } from './LeftSide/LeftSide';
import { MainBody } from './LeftSide/LeftSide.styled';

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

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const percent = useSelector(selectIsPercent)
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(selectIsGetCurrentUser);

  // useEffect(() => {

  //   dispatch(getCurrentUser());
  // }, [dispatch]);


  return (
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
  );
};
