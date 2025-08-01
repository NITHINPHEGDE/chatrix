import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import CreatePost from "./components/CreatePost";

import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");

  return (
    <PostList.Provider>;
    <div className="app-container">
      <Sidebar selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}

        <Footer></Footer>
      </div>
    </div>
    </PostList.Provider>
  );
};

export default App;
