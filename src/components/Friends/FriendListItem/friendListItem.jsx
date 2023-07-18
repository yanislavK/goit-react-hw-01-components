import styles from './friendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
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
