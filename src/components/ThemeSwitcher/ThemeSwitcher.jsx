import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1> */}
    </div>
  );
};

export default ThemeSwitcher;
