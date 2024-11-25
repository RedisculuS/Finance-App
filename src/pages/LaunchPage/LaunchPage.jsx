import { NavLink } from 'react-router-dom';

const LaunchPage = () => {
  return (
    <>
      <div>LaunchPage</div>
      <NavLink to="/auth/login">Login</NavLink>
      <NavLink to="auth/register">Register</NavLink>
      {/* Temporary transfer to home without register and login */}
      <NavLink to="/home">Home</NavLink>
    </>
  );
};

export default LaunchPage;
