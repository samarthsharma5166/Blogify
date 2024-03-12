import "./App.css";
import DataProvider from "./context/DataProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import { useState } from "react";
import CreateCategory from "./Component/Create/CreateCategory";
import CreatePost from "./Component/Create/CreatePost";
const PrivateRoute = ({isAuthenticted, ...props}) => {
  return isAuthenticted ? 
    <>
      <Navbar />
      <Outlet />
    </>
  : 
    <Navigate replace to="/login" />
};
function App() {
  const [isAuthenticted, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="body">
          <Routes>
            <Route
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated}/>} 
            />
            <Route path="/" element={<PrivateRoute isAuthenticted={isAuthenticted}/>}>
              <Route path="/" element={<Home/>} />
            </Route>
            <Route path="/" element={<PrivateRoute isAuthenticted={isAuthenticted}/>}>
              <Route path="/create" element={<CreatePost/>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
