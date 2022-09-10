import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ListOwner from "./pages/List-owner";
import GroupPage from "./pages/Group-page";
import ListOther from "./pages/List-other";
import Notifications from "./pages/Notifications";
// import { getEmailToken } from "./api";

export default function App() {
    
    // const email = localStorage.getItem("email");
    // if(!email) {
    //     //  error page
    // }

    // const user = getEmailToken(email);
    // if(user?.email === email) {
    //     <Profile />
    // } else {
    //      <SignIn />
    // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard">
          <Route index element={<Profile />} />
          <Route path="my-list" element={<ListOwner />} />
          <Route path="item" />
          <Route path="group">
            <Route index element={<GroupPage name={"friends"} />} />
            <Route
              path="list"
              element={<ListOther namePerson={"maria"} nameList={"birthday"} />}
            />
          </Route>
          <Route path='notifications' element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
