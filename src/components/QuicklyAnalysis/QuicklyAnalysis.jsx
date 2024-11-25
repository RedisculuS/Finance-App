import s from './QuicklyAnalysis.module.css';
import { IoCarSportOutline } from 'react-icons/io5';
import { PiMoneyWavy } from 'react-icons/pi';
import { PiForkKnifeLight } from 'react-icons/pi';

const QuicklyAnalysis = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.quickFinanceWrap}>
        <div className={s.savingsWrap}>
          <div className={s.savingIconWrap}>
            <IoCarSportOutline className={s.icon} />
          </div>
          <p className={s.savingsDescr}>savings on goals</p>
        </div>
        <div className={s.dividerVert}></div>
        <div className={s.weeklyStatsWrap}>
          <div className={s.revenueWrap}>
            <PiMoneyWavy className={s.icon} />
            <div className={s.revenueDescr}>
              <p className={s.revenueText}>revenue last week</p>
              <p className={s.revenueSum}>$4.000.00</p>
            </div>
          </div>
          <div className={s.dividerHor}></div>
          <div className={s.expensesWrap}>
            <PiForkKnifeLight className={s.icon} />
            <div className={s.expensesDescr}>
              <p className={s.expensesText}>food last weel</p>
              <p className={s.expensesSum}>-$100</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.filtersWrap}>
        <ul className={s.filtersList}>
          <li className={s.filterItem}>Daily</li>
          <li className={s.filterItemActive}>Weekly</li>
          <li className={s.filterItem}>Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default QuicklyAnalysis;
