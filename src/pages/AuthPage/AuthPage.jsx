import { NavLink, Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <>
      <div>AuthPage</div>
      <div>
        <NavLink to="login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default AuthPage;
