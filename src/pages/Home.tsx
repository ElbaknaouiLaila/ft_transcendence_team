import React from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Searchbar from "./components/Searchbar";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footter";
import MaincontentProfile from "./components/MaincontentProfile";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Setting from "./components/Setting";
import GamePage from "./components/GamePage";
import Authentication from "../components/Authentication";
import FriendList from "./components/FriendList";
import { useLocation } from "react-router-dom";
import ProfileCardUser from "./components/ProfileCardUser";
function Home() {
  const location = useLocation();
  const showSidebarPaths = ["/", "/profile", "/messages", "/friends", "/game", "/setting"];
  const showSidebar = showSidebarPaths.includes(location.pathname);
  return (
    <div className="flex h-screen ">
      <div className="flex-1 flex flex-col overflow-hidden">
      {showSidebar && <Searchbar />}
        <div className="flex h-full ">
        {showSidebar &&  <Sidebar />}
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/friends" element={<FriendList />}></Route>
            <Route path="/game" element={<GamePage />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            {/* <Route path="/profileFriend" element={<ProfileCardUser/>}></Route> */}
            <Route path="/profileFriend/:friendId" element={<ProfileCardUser />} />
            {/* <Route path="/profileFriend/:friendId" element={<ProfileCardUser />} /> */}

            <Route path="/login" element={<Authentication />}></Route>
          </Routes>
          {showSidebar && <Rightbar />}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
export default Home;
