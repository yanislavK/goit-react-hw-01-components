import styles from './statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ data, title }) {
  const elements = data.map(item => (
    <li key={item.id} className={styles.item}>
      <span className={styles.label}> {item.label}</span>

      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));

  const titleRender = title && <h2 className={styles.title}>{title}</h2>;

  return (
    <section className={styles.statistics}>
      {titleRender}
      <ul className={styles.list}>{elements}</ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
