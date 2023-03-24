import PropTypes from "prop-types";
import { Cell } from "../TransactionHistory/TransactionHistory.styled";

export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
