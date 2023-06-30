import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
  console.log(friends);
  return (
    <ul className={css.friendList}>
      {friends.map(friend =>  <li key={friend.id} className={css.item}>
        <span className={friend.isOnline === true ? css.online: css.offline}  ></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
      </li>)}
    </ul>
  );
};
