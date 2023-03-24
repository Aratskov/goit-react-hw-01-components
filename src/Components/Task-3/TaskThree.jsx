import friends from "../../path/friends.json";
import { FriendList } from "./FriendList/FriendList";

export const TaskThree = () => {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
};
