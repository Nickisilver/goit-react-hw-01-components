import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ actions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headingContent}>
          <th className={css.contentContainer}>Type</th>
          <th className={css.contentContainer}>Amount</th>
          <th className={css.contentContainer}>Currency</th>
        </tr>
      </thead>

      {actions.map(action => (
        <tbody key={action.id}>
          <tr>
            <td className={css.contentContainer}>{action.type}</td>
            <td className={css.contentContainer}>{action.amount}</td>
            <td className={css.contentContainer}>{action.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};
