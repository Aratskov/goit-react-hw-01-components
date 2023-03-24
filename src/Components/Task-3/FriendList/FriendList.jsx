import {Friend} from "../Friend/Friend";
import { List, Item } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        <Item key={friend.id}>
          <Friend friend={friend} />
        </Item>
      ))}
    </List>
  );
};

