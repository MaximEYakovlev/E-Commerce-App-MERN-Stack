import "./app.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./pages/home/Home";
import { UserList } from "./pages/userList/UserList";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
