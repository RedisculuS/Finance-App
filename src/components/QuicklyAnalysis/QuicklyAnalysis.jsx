import s from './QuicklyAnalysis.module.css';
import { IoCarSportOutline } from 'react-icons/io5';
import { PiMoneyWavy } from 'react-icons/pi';
import { PiForkKnifeLight } from 'react-icons/pi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { PiBuildingApartment } from 'react-icons/pi';

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
          <li>
            <button className={s.filterItem}>Daily</button>
          </li>
          <li className={s.filterItem}>
            <button className={s.filterItem}>Weekly</button>
          </li>
          <li className={s.filterItem}>
            <button className={s.filterItem}>Monthly</button>
          </li>
        </ul>
      </div>
      {/* <div className={s.transactions}>
        <ul className={s.transactionsList}>
          <li className={s.transactionItem}>
            <div className={s.iconWrap}>
              <PiMoneyWavy className={s.transIcon} />
            </div>
            <div className={s.transWrap}>
              <p className={s.transDescr}>salary</p>
              <p className={s.transDate}>8:30 - April 15</p>
            </div>
            <div className={s.divider}></div>
            <p className={s.transComment}>monthly</p>
            <div className={s.divider}></div>
            <p className={s.transSum}>$4.000,00</p>
          </li>
          <li className={s.transactionItem}>
            <div className={s.iconWrap}>
              <MdOutlineLocalGroceryStore className={s.transIcon} />
            </div>
            <div className={s.transWrap}>
              <p className={s.transDescr}>groceries</p>
              <p className={s.transDate}>18:27 - April 30</p>
            </div>
            <div className={s.divider}></div>
            <p className={s.transComment}>pantry</p>
            <div className={s.divider}></div>
            <p className={s.transSumMinus}>-$100,00</p>
          </li>
          <li className={s.transactionItem}>
            <div className={s.iconWrap}>
              <PiBuildingApartment className={s.transIcon} />
            </div>
            <div className={s.transWrap}>
              <p className={s.transDescr}>rent</p>
              <p className={s.transDate}>17:00 - April 24</p>
            </div>
            <div className={s.divider}></div>
            <p className={s.transComment}>rent</p>
            <div className={s.divider}></div>
            <p className={s.transSumMinus}>-$674,40</p>
          </li>
        </ul>
      </div> */}

      <table>
        <tbody className={s.transactionsList}>
          <tr className={s.transactionItem}>
            <th>
              <div className={s.iconWrap}>
                <PiMoneyWavy className={s.transIcon} />
              </div>
            </th>
            <td>
              <div className={s.transWrap}>
                <p className={s.transDescr}>salary</p>
                <p className={s.transDate}>8:30 - April 15</p>
              </div>
            </td>
            <div className={s.divider}></div>
            <td>
              <p className={s.transComment}>monthly</p>
            </td>
            <div className={s.divider}></div>
            <td>
              <p className={s.transSum}>$4.000,00</p>
            </td>
          </tr>
          <tr className={s.transactionItem}>
            <th>
              <div className={s.iconWrap}>
                <PiMoneyWavy className={s.transIcon} />
              </div>
            </th>
            <td>
              <div className={s.transWrap}>
                <p className={s.transDescr}>salary</p>
                <p className={s.transDate}>8:30 - April 15</p>
              </div>
            </td>
            <div className={s.divider}></div>
            <td>
              <p className={s.transComment}>monthly</p>
            </td>
            <div className={s.divider}></div>
            <td>
              <p className={s.transSum}>$4.000,00</p>
            </td>
          </tr>

          <tr className={s.transactionItem}>
            <th>
              <div className={s.iconWrap}>
                <PiMoneyWavy className={s.transIcon} />
              </div>
            </th>
            <td>
              <div className={s.transWrap}>
                <p className={s.transDescr}>salary</p>
                <p className={s.transDate}>8:30 - April 15</p>
              </div>
            </td>
            <div className={s.divider}></div>
            <td>
              <p className={s.transComment}>monthly</p>
            </td>
            <div className={s.divider}></div>
            <td>
              <p className={s.transSum}>$4.000,00</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuicklyAnalysis;
