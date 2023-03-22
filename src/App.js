import Profile from "./Components/Task-1/Profile";
import Static from "./Components/Task-1/Static";
import StatisticList from "./Components/Task-2/StatisticList";
import FriendList from "./Components/Task-3/FriendList";
import TransactionHistory from "./Components/Task-4/TransactionHistory";

import user from "./path/user.json";
import data from "./path/data.json";
import friends from "./path/friends.json"
import transactions from "./path/transactions.json"

import "./App.css";

function App() {
  return (
    <>
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
      <div>
        <StatisticList items = {data}/>
      </div>
      <div>
        <FriendList friends = {friends}/>
      </div>
      <div>
        <TransactionHistory items = {transactions}/>
      </div>
    </>
  );
}

export default App;
