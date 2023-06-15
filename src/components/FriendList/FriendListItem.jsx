import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const Friend = ({ avatar, name, isOnline}) => {
  return (
    <div className={ css.frienddiv}>
      {isOnline ? (
        <span className={css.status}>Online</span>
      ) : (
        <span className={css.status}>Offline</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
   </div>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
