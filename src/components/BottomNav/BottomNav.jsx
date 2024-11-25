import { HiOutlineHome } from 'react-icons/hi2';
import { TbListSearch } from 'react-icons/tb';
import { HiMiniArrowsRightLeft } from 'react-icons/hi2';
import { GoStack } from 'react-icons/go';
import { MdOutlineAccountCircle } from 'react-icons/md';
import s from './BottomNav.module.css';

const BottomNav = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.navList}>
        <li>
          <button className={s.navItemBtn}>
            <HiOutlineHome className={s.btnIcon} />
          </button>
        </li>
        <li>
          <button className={s.navItemBtn}>
            <TbListSearch className={s.btnIcon} />
          </button>
        </li>
        <li>
          <button className={s.navItemBtn}>
            <HiMiniArrowsRightLeft className={s.btnIcon} />
          </button>
        </li>
        <li>
          <button className={s.navItemBtn}>
            <GoStack className={s.btnIcon} />
          </button>
        </li>
        <li>
          <button className={s.navItemBtn}>
            <MdOutlineAccountCircle className={s.btnIcon} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
