import { Outlet } from 'react-router-dom';
import BottomNav from '../BottomNav/BottomNav';

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
