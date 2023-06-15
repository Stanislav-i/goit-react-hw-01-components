import PropTypes from 'prop-types';

export const Transaction = ({ type, amount, currency }) => {
  return (
      <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypesropTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};