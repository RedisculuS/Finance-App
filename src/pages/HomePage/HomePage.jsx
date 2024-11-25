import { NavLink } from 'react-router-dom';
import FloatingMenu from '../../components/FloatingMenu/FloatingMenu';
import AccountBalance from '../../components/AccountBalance/AccountBalance';
import QuicklyAnalysis from '../../components/QuicklyAnalysis/QuicklyAnalysis';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      {/* <div>HomePage</div> */}
      <FloatingMenu />
      <NavLink to="account-balance">
        <AccountBalance />
      </NavLink>
      <NavLink to="quickly-analysis">
        <QuicklyAnalysis />
      </NavLink>
    </div>
  );
};

export default HomePage;
