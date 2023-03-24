import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../../path/transactions.json'

export const TaskFour = () => {
  return (
    <div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
