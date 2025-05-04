import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const SharedLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between', paddingTop:'30px'
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
