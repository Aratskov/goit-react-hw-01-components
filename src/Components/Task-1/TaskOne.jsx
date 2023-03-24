import { Profile } from "./Profile/Profile";
import { Static } from "./Static/Static";

import user from "../../path/user.json";
import "../index.css";

export const TaskOne = () => {
  return (
    <div className="profile">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Static
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
