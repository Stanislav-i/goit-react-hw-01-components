import css from './FriendList.module.css';
import { Friend } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <Friend avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
