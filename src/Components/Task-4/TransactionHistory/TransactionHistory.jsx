import { Transaction } from "../Transaction/Transaction";
import { History, Thead, Cell, SecondThead } from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
  return (
    <History>
      <Thead>
        <tr>
          <Cell>Type</Cell>
          <Cell>Amount</Cell>
          <Cell>Currency</Cell>
        </tr>
      </Thead>

      <SecondThead>
        {items.map((item) => (
          <tr key={item.id}>
            <Transaction transaction={item} />
          </tr>
        ))}
      </SecondThead>
    </History>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
