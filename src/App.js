import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ListOwner from "./pages/List-owner";
import GroupPage from "./pages/Group-page";
import ListOther from "./pages/List-other";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import { GeneralProvider } from "./context/GeneralContext";
import { ProtectedRoute } from "./routes/ProtectedRoutes";

export default function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-list"
              element={
                <ProtectedRoute>
                  <ListOwner />
                </ProtectedRoute>
              }
            />
            <Route path="item" />
            <Route path="group">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <GroupPage name={"friends"} />
                  </ProtectedRoute>
                }
              />
              <Route path="list" element={<ListOther />} />
            </Route>
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}
