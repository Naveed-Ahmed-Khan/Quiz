import { Navigate, Route, Routes } from "react-router-dom";
import AddItem from "./pages/AddItem";
import AddNews from "./pages/AddNews";
import AddQuiz from "./pages/AddQuiz";
import AddUser from "./pages/AddUser";
import AllGalleries from "./pages/AllGalleries";
import Business from "./pages/Business";
import BusinessDashboard from "./pages/BusinessDashboard";
import BusinessHome from "./pages/BusinessHome";
import Dashboard from "./pages/Dashboard";
import EditItem from "./pages/EditItem";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import News from "./pages/News";
import Payment from "./pages/Payment";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      {/* Login  */}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/payment/:id" element={<Payment />} />

      <Route path="/" element={<Dashboard />}>
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/add-quiz" element={<AddQuiz />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/news" element={<News />} />
        <Route path="/business" element={<Business />} />
        <Route path="/items" element={<AllGalleries />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/edit/:item" element={<EditItem />} />
      </Route>
    </Routes>
  );
}

export default App;
