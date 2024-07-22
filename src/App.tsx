import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import UploadPhotoPage from "./pages/UploadPhotoPage";
import NotificationPage from "./pages/NotificationPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/upload" element={<UploadPhotoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/message" element={<ChatPage />} />
      <Route path="/notification" element={<NotificationPage />} />
    </Routes>
  );
}
