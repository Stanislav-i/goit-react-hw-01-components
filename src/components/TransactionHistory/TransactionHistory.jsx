import css from './TransactionHistory.module.css'
import { Transaction } from "./Transaction";

export const TransactionHistory = ({ transactionHistory }) => {
    return (
      <table className={css.transactiontable}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionHistory.map(({ id, type, amount, currency }) => (
            <Transaction type={type} amount={amount} currency={currency} />
          ))}
        </tbody>
      </table>
    );
};