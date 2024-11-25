import s from './FloatingMenu.module.css';
import { FaRegBell } from 'react-icons/fa6';

const FloatingMenu = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.textWrapper}>
        <p className={s.greetingsText}>Hello!</p>
        <p className={s.descrText}>Happy to see you again!</p>
      </div>
      <button className={s.notificationBtn}>
        <FaRegBell />
      </button>
    </div>
  );
};

export default FloatingMenu;
