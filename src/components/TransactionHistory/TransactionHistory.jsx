import styles from './transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  const elements = items.map(item => (
    <tr className={styles.row} key={item.id}>
      <td className={styles.rowElement}>{item.type}</td>
      <td className={styles.rowElement}>{item.amount}</td>
      <td className={styles.rowElement}>{item.currency}</td>
    </tr>
  ));
// cc
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr className={styles.row}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
}
