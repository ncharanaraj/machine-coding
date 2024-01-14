import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import useGetUser from "./hooks/useGetUser";
import Profile from "./components/Profile";

function App() {
  const [searchText, setSearchText] = useState("");
  const { user, loading, getUserInfo } = useGetUser();
  console.log(user);
  return (
    <div>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        getUserInfo={getUserInfo}
      />
      {loading ? <p>Loading...</p> : <Profile user={user} />}
    </div>
  );
}

export default App;
