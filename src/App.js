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
import MyGroup from "./pages/MyGroup-page";

export default function App() {
  return (
    
      <BrowserRouter>
      <GeneralProvider>
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
              path="my-list/:name/:id"
              element={
                <ProtectedRoute>
                  <ListOwner />
                </ProtectedRoute>
              }
            />
            <Route path='my-group/:id' element={<MyGroup />} />
            <Route path="group-invited/:id">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <GroupPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="list/:namePerson/:nameList/:id"
                element={
                  <ProtectedRoute>
                    <ListOther />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
        </GeneralProvider>
      </BrowserRouter>
    
  );
}
