import { Navigate, Route, Routes } from "react-router-dom";

import AddNews from "./pages/AddNews";
import AddQuiz from "./pages/AddQuiz";
import AddUser from "./pages/AddUser";

import CategoriesNews from "./pages/CategoriesNews";
import CategoriesQuiz from "./pages/CategoriesQuiz";
import Dashboard from "./pages/Dashboard";
import EditNews from "./pages/EditNews";
import EditQuiz from "./pages/EditQuiz";
import EditUser from "./pages/EditUser";

import ForgetPassword from "./pages/ForgetPassword";

import Login from "./pages/Login";
import News from "./pages/News";

import Quiz from "./pages/Quiz";
import Ratings from "./pages/Ratings";
import Settings from "./pages/Settings";

import Signup2 from "./pages/Signup2";

import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      {/* Login  */}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup2 />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/" element={<Dashboard />}>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/users" element={<Users />} />
        <Route path="/news" element={<News />} />
        <Route path="/rating" element={<Ratings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/categories-quiz" element={<CategoriesQuiz />} />
        <Route path="/categories-news" element={<CategoriesNews />} />
        <Route path="/add-quiz" element={<AddQuiz />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-quiz" element={<EditQuiz />} />
        <Route path="/edit-news" element={<EditNews />} />
        <Route path="/edit-users" element={<EditUser />} />
      </Route>
    </Routes>
  );
}

export default App;
