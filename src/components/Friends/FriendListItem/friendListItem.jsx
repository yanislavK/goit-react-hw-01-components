import styles from './friendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  const statusRender = isOnline ? `${styles.status}` : `${styles.statusOff}`;
  return (
    <li className={styles.item}>
      <span className={statusRender}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
