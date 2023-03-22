import Friend from "./Friend";
import './friend-list.css'

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id} className="item-3">
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
