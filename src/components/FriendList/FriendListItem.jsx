import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <li   className={css.item}>
      <span
        className={friend.isOnline === true ? css.online : css.offline}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
  
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,

  }).isRequired,
}
