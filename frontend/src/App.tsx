import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import Leaderboard from "Pages/Leaderboard";
// import NavBarAfterLogin from "components/NavBarAfterLogin";
// import Footer from "components/Footer/Footer";

import Navbar from "components/Navbar/Navbar";
import { SignupPage } from "Pages/Signup";
import { SigninPage } from "Pages/Signin";
import { TutorialPage } from "Pages/Tutorial";

const App = () => {
  return (
    <>
      {/* <NavBarAfterLogin /> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/tutorial" element={<TutorialPage />}></Route>
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
