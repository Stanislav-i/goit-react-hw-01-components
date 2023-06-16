import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { Transaction } from "./Transaction";
import { Fragment } from 'react';

export const TransactionHistory = ({ transactionHistory }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>

        <tbody>
          {transactionHistory.map(({ id, type, amount, currency }) => (
            <Fragment key={id}>
              <Transaction type={type} amount={amount} currency={currency} />
            </Fragment>
          ))}
        </tbody>
      </table>
    );
};

TransactionHistory.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};