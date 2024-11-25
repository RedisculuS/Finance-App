import {
  PiArrowSquareDownRightThin,
  PiArrowSquareUpRightThin,
} from 'react-icons/pi';
import { CiSquareCheck } from 'react-icons/ci';

import s from './AccountBalance.module.css';

const AccountBalance = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.balances}>
        <div>
          <div className={s.textTotalWrap}>
            <PiArrowSquareUpRightThin className={s.icon} />
            <p className={s.textTotal}>total balance</p>
          </div>
          <p className={s.balanceSum}>$7.783.00</p>
        </div>
        <div className={s.divider}></div>
        <div>
          <div className={s.textTotalWrap}>
            <PiArrowSquareDownRightThin className={s.icon} />
            <p className={s.textTotal}>total expense</p>
          </div>
          <p className={s.expenseSum}>-$1.187.40</p>
        </div>
      </div>
      <div className={s.progressBar}>
        <div className={s.percentExpense}>30%</div>
        <div className={s.progressSum}>$20,000.00</div>
      </div>
      <div className={s.progessBarTextWrap}>
        <CiSquareCheck className={s.icon} />
        <p className={s.progressBarText}>30% of your expenses, looks good.</p>
      </div>
    </div>
  );
};

export default AccountBalance;
