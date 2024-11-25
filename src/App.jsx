import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import LaunchPage from './pages/LaunchPage/LaunchPage';
import AuthPage from './pages/AuthPage/AuthPage';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import AccountBalancePage from './pages/AccountBalancePage/AccountBalancePage';
import QuicklyAnalysisPage from './pages/QuicklyAnalysisPage/QuicklyAnalysisPage';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './components/ThemeSwitcher/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {
  //also needs to be theme switcher

  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Navigate to="/launch" />} />
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/auth" element={<AuthPage />}>
          {/* In the future will be as restricted route */}
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>

        <Route path="/home" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/home/account-balance"
            element={<AccountBalancePage />}
          />
          <Route
            path="/home/quickly-analysis"
            element={<QuicklyAnalysisPage />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
