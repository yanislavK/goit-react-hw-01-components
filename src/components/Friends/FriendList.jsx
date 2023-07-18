import styles from './friendList.module.css';

import FriendListItem from './FriendListItem/friendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  )
}
